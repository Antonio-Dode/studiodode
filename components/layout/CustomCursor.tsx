"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.display = "block";
      }
      rx += (e.clientX - rx) * 0.12;
      ry += (e.clientY - ry) * 0.12;
    };

    const animate = () => {
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
        ringRef.current.style.display = "block";
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const onEnterLink = () => ringRef.current?.classList.add("hover");
    const onLeaveLink = () => ringRef.current?.classList.remove("hover");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ display: "none" }} />
      <div ref={ringRef} className="cursor-ring" style={{ display: "none" }} />
    </>
  );
}
