import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

function LoaderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  );
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Hardening: Client-side validation & sanitization
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const accessKey = (import.meta as any).env?.PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s network timeout

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          from_name: "Portfolio Contact Form",
        }),
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage("Transmission encountered an issue. Please retry or email directly.");
        setTimeout(() => setStatus("idle"), 7000);
      }
    } catch (err: any) {
      setStatus("error");
      if (err?.name === "AbortError") {
        setErrorMessage("Network request timed out. Please check your connection or email directly.");
      } else {
        setErrorMessage("Something went wrong. Please email directly at kifansanf@gmail.com");
      }
      setTimeout(() => setStatus("idle"), 7000);
    }
  };

  const inputStyle = {
    backgroundColor: "var(--bg-surface)",
    borderColor: "var(--border)",
    color: "var(--text)",
  };

  const handleFocus = (e: any) => {
    e.target.style.borderColor = "var(--accent)";
    e.target.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent)";
  };

  const handleBlur = (e: any) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col justify-between flex-1" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1.5 text-center sm:text-left" style={{ color: "var(--text-muted)" }}>
          Your Name <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={100}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border text-base sm:text-sm outline-none transition-all duration-200 text-center sm:text-left placeholder:text-center sm:placeholder:text-left shadow-sm min-w-0"
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="e.g. Alex Henderson"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1.5 text-center sm:text-left" style={{ color: "var(--text-muted)" }}>
          Email Address <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={120}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border text-base sm:text-sm outline-none transition-all duration-200 text-center sm:text-left placeholder:text-center sm:placeholder:text-left shadow-sm min-w-0"
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="alex@company.com"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="message" className="block text-sm font-semibold text-center sm:text-left" style={{ color: "var(--text-muted)" }}>
            Message <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <span className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
            {formData.message.length}/2000
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border text-base sm:text-sm outline-none resize-none transition-all duration-200 text-center sm:text-left placeholder:text-center sm:placeholder:text-left shadow-sm min-w-0"
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Describe your project, question, or opportunity..."
        />
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
            className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 text-xs sm:text-sm font-semibold text-center sm:text-left p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
          >
            <CheckIcon />
            Message sent successfully! I will reply to you promptly.
          </motion.div>
        ) : status === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="alert"
            className="flex flex-col gap-1 text-red-400 text-xs sm:text-sm font-medium text-center sm:text-left p-3 rounded-xl bg-red-500/10 border border-red-500/20"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <AlertIcon />
              <span>{errorMessage || "Transmission error. Please email directly."}</span>
            </div>
            <a
              href="mailto:kifansanf@gmail.com?subject=Inquiry%20from%20Portfolio"
              className="text-[11px] underline text-sky-400 hover:text-sky-300 font-semibold self-center sm:self-start mt-0.5"
            >
              Click here to launch your email client →
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <LoaderIcon />
            Sending Message...
          </>
        ) : (
          <>
            <SendIcon />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
