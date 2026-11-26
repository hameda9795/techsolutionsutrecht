/**
 * Eén bron van waarheid voor de stadspagina's.
 *
 * Werd op drie plekken los onderhouden (footer, servicepagina, CityPageLayout),
 * waardoor de servicepagina maar 5 van de 11 plaatsen linkte en Culemborg —
 * de plaats die het dichtst bij een top 3-positie staat — er niet bij zat.
 *
 * De volgorde is bewust en komt uit Search Console: hoe dichter bij de top 3,
 * hoe hoger in de lijst. Utrecht zelf staat op de homepage en hoort hier niet.
 */

export type City = {
  slug: string;
  name: string;
  blurb: string;
};

export const cities: City[] = [
  { slug: "de-meern", name: "De Meern", blurb: "Leidsche Rijn en omgeving, vlak bij Utrecht." },
  { slug: "culemborg", name: "Culemborg", blurb: "Webdesign en webshops voor de vrijstad aan de Lek." },
  { slug: "ijsselstein", name: "IJsselstein", blurb: "Webdesign, hosting en SEO voor lokale ondernemers." },
  { slug: "zeist", name: "Zeist", blurb: "Websites en SEO voor adviseurs, praktijken en dienstverleners." },
  { slug: "veenendaal", name: "Veenendaal", blurb: "Webdesign en webshops tussen Utrecht en de Veluwe." },
  { slug: "houten", name: "Houten", blurb: "No-nonsense ondernemers, van Het Rond tot De Slagen." },
  { slug: "vleuten", name: "Vleuten", blurb: "Groeiende wijk met veel zzp'ers aan huis." },
  { slug: "woerden", name: "Woerden", blurb: "Het Groene Hart, met een sterke lokale economie." },
  { slug: "nieuwegein", name: "Nieuwegein", blurb: "Bedrijventerreinen en mkb aan de zuidkant van Utrecht." },
  { slug: "amersfoort", name: "Amersfoort", blurb: "Groeiende ondernemersstad op een half uur afstand." },
];
