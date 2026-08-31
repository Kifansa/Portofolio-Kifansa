import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioningRef.current) return;
    const nextDark = !isDark;
    const root = document.documentElement;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (nextDark) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setIsDark(nextDark);
      return;
    }

    isTransitioningRef.current = true;

    // Calculate exact button center coordinates
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : e.clientX;
    const y = rect ? rect.top + rect.height / 2 : e.clientY;

    // Calculate maximum radius to fully sweep across screen corners
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Create a sleek, transparent expanding shockwave ring
    const diskSize = 36;
    const targetScale = (endRadius * 2.5) / diskSize;

    const wave = document.createElement("div");
    wave.style.position = "fixed";
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    wave.style.width = `${diskSize}px`;
    wave.style.height = `${diskSize}px`;
    wave.style.marginLeft = `-${diskSize / 2}px`;
    wave.style.marginTop = `-${diskSize / 2}px`;
    wave.style.borderRadius = "50%";
    wave.style.background = "transparent";
    wave.style.border = nextDark
      ? "3px solid rgba(250, 250, 250, 0.8)"
      : "3px solid rgba(9, 9, 11, 0.7)";
    wave.style.boxShadow = nextDark
      ? "0 0 36px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)"
      : "0 0 36px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(0, 0, 0, 0.12)";
    wave.style.transform = "scale3d(0, 0, 1)";
    wave.style.opacity = "1";
    wave.style.willChange = "transform, opacity";
    wave.style.pointerEvents = "none";
    wave.style.zIndex = "999999";
    document.body.appendChild(wave);

    // Seamlessly toggle theme state right as the wave bursts
    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(nextDark);

    // 100% GPU Compositor Animation (Smooth & Calm 1400ms Cinematic Wavefront)
    const anim = wave.animate(
      [
        { transform: "scale3d(0, 0, 1)", opacity: 1 },
        { transform: `scale3d(${targetScale * 0.35}, ${targetScale * 0.35}, 1)`, opacity: 0.92, offset: 0.35 },
        { transform: `scale3d(${targetScale * 0.7}, ${targetScale * 0.7}, 1)`, opacity: 0.55, offset: 0.7 },
        { transform: `scale3d(${targetScale}, ${targetScale}, 1)`, opacity: 0 }
      ],
      {
        duration: 1400,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );

    anim.onfinish = () => {
      wave.remove();
      isTransitioningRef.current = false;
    };
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border shadow-xs transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-surface)",
        color: "var(--text)",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -80, opacity: 0, scale: 0.55 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 80, opacity: 0, scale: 0.55 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </motion.div>
    </button>
  );
}
