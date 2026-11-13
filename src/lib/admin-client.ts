"use client";

export async function adminFetch(input: RequestInfo | URL, init?: RequestInit) {
  const response = await fetch(input, { ...init, credentials: "same-origin", cache: "no-store" });
  if (response.status === 401) {
    window.location.assign("/admin/login");
    throw new Error("Je sessie is verlopen. Log opnieuw in.");
  }
  return response;
}
export async function logoutAdmin() {
  try {
    const response = await fetch("/api/admin/logout", { method: "POST", credentials: "same-origin", cache: "no-store" });
    if (!response.ok) throw new Error("Uitloggen is niet gelukt. Probeer het opnieuw.");
    window.location.assign("/admin/login");
  } catch {
    alert("Uitloggen is niet gelukt. Probeer het opnieuw.");
  }
}
