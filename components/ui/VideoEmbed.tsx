"use client";
import { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  youtubeId?: string;
  thumbnail: string;
  title?: string;
}

export default function VideoEmbed({ youtubeId, thumbnail, title = "Vídeo do projeto" }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing && youtubeId) {
    return (
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "var(--r-box)", overflow: "hidden", background: "#000" }}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&color=white`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
        />
      </div>
    );
  }

  return (
    <div
      role={youtubeId ? "button" : undefined}
      tabIndex={youtubeId ? 0 : undefined}
      aria-label={youtubeId ? `Reproduzir: ${title}` : undefined}
      onClick={() => { if (youtubeId) setPlaying(true); }}
      onKeyDown={(e) => { if (youtubeId && (e.key === "Enter" || e.key === " ")) setPlaying(true); }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "var(--r-box)",
        overflow: "hidden",
        cursor: youtubeId ? "pointer" : "default",
        background: "var(--bg3)",
      }}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 800px"
      />
      {youtubeId && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.35)",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.5)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.35)"; }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <polygon points="6,4 20,12 6,20" fill="#000" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
