"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const thumbRef = useRef(null);
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const metricsRef = useRef({
    trackHeight: 0,
    thumbHeight: 0,
    maxTranslate: 0,
    limit: 0,
    dragging: false,
    grabOffset: 0,
    hovering: false,
    lastScroll: 0,
    lastActivity: 0,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);

      const thumb = thumbRef.current;
      const m = metricsRef.current;
      if (thumb) {
        const { scroll, limit } = lenis;
        m.limit = limit;
        if (limit <= 0) {
          thumb.style.opacity = "0";
        } else {
          const trackHeight = window.innerHeight - 16;
          const thumbHeight = Math.max(
            40,
            Math.min(trackHeight, (window.innerHeight / (window.innerHeight + limit)) * trackHeight)
          );
          const maxTranslate = trackHeight - thumbHeight;
          m.trackHeight = trackHeight;
          m.thumbHeight = thumbHeight;
          m.maxTranslate = maxTranslate;
          thumb.style.height = `${thumbHeight}px`;

          if (Math.abs(scroll - m.lastScroll) > 0.05) {
            m.lastActivity = time;
          }
          m.lastScroll = scroll;
          const idle = time - m.lastActivity > 700;
          thumb.style.opacity = m.dragging || m.hovering || !idle ? "1" : "0";

          if (!m.dragging) {
            thumb.style.transform = `translateY(${(scroll / limit) * maxTranslate}px)`;
          }
        }
      }

      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function onPointerMove(e) {
      const m = metricsRef.current;
      if (!m.dragging) return;
      const y = e.clientY - 8 - m.grabOffset;
      const clamped = Math.max(0, Math.min(m.maxTranslate, y));
      const progress = m.maxTranslate > 0 ? clamped / m.maxTranslate : 0;
      if (thumbRef.current) thumbRef.current.style.transform = `translateY(${clamped}px)`;
      lenis.scrollTo(progress * m.limit, { immediate: true });
    }

    function onPointerUp() {
      metricsRef.current.dragging = false;
      document.body.style.userSelect = "";
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    }

    function onPointerDown(e) {
      const m = metricsRef.current;
      const rect = thumbRef.current.getBoundingClientRect();
      m.dragging = true;
      m.grabOffset = e.clientY - rect.top;
      document.body.style.userSelect = "none";
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    }

    function onPointerEnter() {
      metricsRef.current.hovering = true;
    }
    function onPointerLeave() {
      metricsRef.current.hovering = false;
    }

    const thumbEl = thumbRef.current;
    thumbEl?.addEventListener("pointerdown", onPointerDown);
    thumbEl?.addEventListener("pointerenter", onPointerEnter);
    thumbEl?.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      thumbEl?.removeEventListener("pointerdown", onPointerDown);
      thumbEl?.removeEventListener("pointerenter", onPointerEnter);
      thumbEl?.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    const id = requestAnimationFrame(() => lenis.resize());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div
      ref={thumbRef}
      style={{ touchAction: "none" }}
      className="fixed right-0.5 top-2 z-[2000] w-2 mix-blend-difference cursor-grab rounded-full bg-white/70 opacity-0 transition-[opacity,background-color] duration-500 ease-out hover:bg-white active:cursor-grabbing active:bg-white"
    />
  );
}
