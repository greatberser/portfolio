import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Border frame */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid #1f1f1f",
            borderRadius: 16,
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 48,
            fontSize: 18,
            color: "#6b7280",
            letterSpacing: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>mm</span>
          <span style={{ color: "#3b82f6" }}>.</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Maksym Melnychuk
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            color: "#6b7280",
            marginBottom: 48,
          }}
        >
          Frontend Developer
        </div>

        {/* Tech badges */}
        <div style={{ display: "flex", gap: 12 }}>
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 16px",
                border: "1px solid #1f1f1f",
                borderRadius: 8,
                background: "#111111",
                color: "#e2e8f0",
                fontSize: 16,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
