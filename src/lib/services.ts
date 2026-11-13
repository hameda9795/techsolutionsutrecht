import { packageCategoryOrder, packageGroups, formatPrice } from "@/lib/packages";

export const coreServices = packageCategoryOrder.map((category) => {
  const group = packageGroups[category];
  const first = group.packages[0];
  return {
    id: category, title: category === "seo" ? "SEO uitbesteden" : group.title, href: group.href,
    price: category === "seo" ? `${formatPrice(first.price)} eenmalig / vanaf ${formatPrice(Math.min(...group.packages.filter((plan) => plan.period === "per maand").map((plan) => plan.price)))} per maand` : `${first.from || group.packages.length > 1 ? "Vanaf " : ""}${formatPrice(first.price)}${first.period === "per maand" ? " per maand" : ""}`,
    pagePriceNote: "Exclusief btw",
    homeDescription: group.intro, pageDescription: group.intro,
    homeFeatures: first.features, pageFeatures: first.features,
    homeCta: "Bekijk pakketten", pageCta: "Bekijk pakketten en werkwijze",
    schemaPrice: String(first.price),
    schemaPeriod: first.period,
    priceDescription: `${formatPrice(first.price)} ${first.period}, exclusief btw. ${group.shared}`,
  };
});
