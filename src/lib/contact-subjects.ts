export const contactSubjects = [
  "Website laten maken",
  "Webshop laten maken",
  "Maatwerk website laten maken",
  "Hoger in Google (SEO)",
  "Chatbot laten maken",
  "Windows-applicatie laten maken",
  "Website onderhoud",
  "Andere vraag",
] as const;

export type ContactSubject = (typeof contactSubjects)[number];

// Keep existing form values and package links stable while matching the current
// service names shown to customers.
export const contactSubjectLabels: Record<ContactSubject, string> = {
  "Website laten maken": "WordPress website laten maken",
  "Webshop laten maken": "WooCommerce webshop laten maken",
  "Maatwerk website laten maken": "Maatwerk website laten maken",
  "Hoger in Google (SEO)": "SEO uitbesteden",
  "Chatbot laten maken": "Chatbot laten maken",
  "Windows-applicatie laten maken": "Maatwerk software (Windows-applicatie)",
  "Website onderhoud": "WordPress / WooCommerce onderhoud",
  "Andere vraag": "Andere vraag / advies nodig",
};

export function isContactSubject(value: unknown): value is ContactSubject {
  return (
    typeof value === "string" &&
    contactSubjects.includes(value as ContactSubject)
  );
}
