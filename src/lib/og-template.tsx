import { ImageResponse } from "next/og";

export const ogAlt = "TechSolutionsUtrecht — Website Laten Maken Utrecht";
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, oklch(0.520 0.170 247) 0%, oklch(0.420 0.160 247) 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.15)",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            TS
          </div>
          <div style={{ fontSize: "30px", fontWeight: 600, letterSpacing: "-0.5px" }}>
            TechSolutionsUtrecht
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Website laten maken in Utrecht
          </div>
          <div style={{ fontSize: "34px", color: "oklch(0.900 0.020 247)", fontWeight: 500 }}>
            Professioneel, snel &amp; SEO-klaar — binnen 1 week online
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", fontSize: "26px", color: "oklch(0.950 0.010 247)" }}>
          <span>12+ jaar ervaring</span>
          <span>•</span>
          <span>Direct contact met de developer</span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
