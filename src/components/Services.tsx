import Link from "next/link";
import PricingPackages from "@/components/PricingPackages";

export default function Services() {
  return <div>
    <PricingPackages category="wordpress" id="website-prijzen" source="/" />
    <div className="package-surface"><div className="package-container service-related">
      <Link href="/diensten/website-laten-maken">Wat zit er in mijn WordPress website?</Link>
      <Link href="/diensten/webshop">Webshop laten maken vanaf €950</Link>
      <Link href="/prijzen">Alle pakketten en prijzen</Link>
    </div></div>
  </div>;
}
