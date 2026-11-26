import PackageServicePage from "@/components/PackageServicePage";
import { serviceMetadata } from "@/lib/service-content";

export const metadata = serviceMetadata("onderhoud");

export default function Page() {
  return <PackageServicePage category="onderhoud" />;
}
