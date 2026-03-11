import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0a0a0a",
          border: "1px solid #1f1f1f",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: 13,
          fontWeight: 600,
          color: "#ffffff",
          letterSpacing: -0.5,
        }}
      >
        mm
        <span style={{ color: "#3b82f6" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
