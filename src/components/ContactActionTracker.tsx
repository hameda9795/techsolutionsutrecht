"use client";

import { useEffect } from "react";
import { trackContactClick } from "@/lib/contact-analytics";

export default function ContactActionTracker() {
  useEffect(() => {
    const track = (event: MouseEvent) => {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      const href = anchor?.getAttribute("href") || "";
      if (href === "tel:+31625518708") trackContactClick("telephone");
      else if (href === "mailto:info@techsolutionsutrecht.nl") trackContactClick("email");
      else if (/^https:\/\/wa\.me\/31625518708(?:\?|$)/.test(href)) trackContactClick("whatsapp");
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, []);
  return null;
}
