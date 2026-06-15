interface MarqueeItem {
  src: string;
  alt: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  speed?: number;
  imageHeight?: number;
}

export default function Marquee({ items, speed = 40, imageHeight = 150 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "100%", mixBlendMode: "multiply" }}>
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "64px",
          width: "max-content",
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "64px",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              style={{
                height: imageHeight,
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <span style={{ color: "var(--line)", fontSize: "20px", userSelect: "none" }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
