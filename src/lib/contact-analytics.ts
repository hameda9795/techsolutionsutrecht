type ContactMethod = "whatsapp" | "telephone" | "email";

function sendEvent(name: "generate_lead" | "contact_click", parameters: Record<string, string>) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const hasConsent = document.cookie.split(";").some((value) => value.trim() === "tsu_cookie_consent=granted");
  if (!hasConsent || !window.gtag) return;
  try {
    window.gtag("event", name, parameters);
  } catch {
    // Measurement must never change whether a visitor can contact the business.
  }
}

// Only fixed service/package labels go to Analytics. Never pass form fields.
export function trackSuccessfulContact(service: string, packageId?: string) {
  sendEvent("generate_lead", {
    form_id: "contact",
    service,
    ...(packageId ? { package_id: packageId } : {}),
  });
}

export function trackContactClick(method: ContactMethod) {
  sendEvent("contact_click", { contact_method: method });
}
