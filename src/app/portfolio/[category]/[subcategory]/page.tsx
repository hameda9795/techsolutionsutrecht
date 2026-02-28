import { redirect } from "next/navigation";

// This page now redirects to the main portfolio page
// All portfolio functionality is handled client-side in PortfolioContent
export default function PortfolioDetailPage() {
  redirect("/portfolio");
}
