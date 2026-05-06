"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
};

function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    function revealIfVisible() {
      if (!element) return;

      if (isElementInViewport(element)) {
        setVisible(true);
      }
    }

    revealIfVisible();

    const timeout = window.setTimeout(() => {
      revealIfVisible();
    }, 150);

    const fallbackTimeout = window.setTimeout(() => {
      setVisible(true);
    }, 900);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);

    function handlePageShow() {
      window.requestAnimationFrame(() => {
        revealIfVisible();
      });
    }

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePageShow);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      window.clearTimeout(fallbackTimeout);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePageShow);
    };
  }, []);

  const directionClass = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "translate-y-0",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${directionClass} opacity-0`,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}