import PackageServicePage from "@/components/PackageServicePage";
import { serviceMetadata } from "@/lib/service-content";

export const metadata = serviceMetadata("wordpress");
export const dynamic = "force-dynamic";

export default function Page() {
  return <PackageServicePage category="wordpress" />;
}
