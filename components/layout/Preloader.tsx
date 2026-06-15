"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader${hidden ? " hidden" : ""}`}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <div className="preloader-spinner">
          <div />
          <div />
        </div>
        <span
          style={{
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            background: "var(--aurora)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          DODÉ
        </span>
      </div>
    </div>
  );
}
