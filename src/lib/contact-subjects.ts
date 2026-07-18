export const contactSubjects = [
  "Website laten maken",
  "Webshop laten maken",
  "Hoger in Google (SEO)",
  "Website onderhoud",
  "WhatsApp & automatisering",
  "Reparatie en technische hulp",
  "Andere vraag",
] as const;

export type ContactSubject = (typeof contactSubjects)[number];

export function isContactSubject(value: unknown): value is ContactSubject {
  return (
    typeof value === "string" &&
    contactSubjects.includes(value as ContactSubject)
  );
}
