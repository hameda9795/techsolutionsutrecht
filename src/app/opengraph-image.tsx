import { ogAlt, ogSize, ogContentType, renderOgImage } from "@/lib/og-template";

export const runtime = "edge";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage();
}
