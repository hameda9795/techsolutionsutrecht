import PackageServicePage from "@/components/PackageServicePage";
import { serviceMetadata } from "@/lib/service-content";

export const metadata = serviceMetadata("chatbot");

export default function Page() {
  return <PackageServicePage category="chatbot" />;
}

