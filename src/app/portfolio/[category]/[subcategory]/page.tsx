import { redirect } from "next/navigation";

// Generate static paths for all category/subcategory combinations
export function generateStaticParams() {
  // Return empty array - this page just redirects to /portfolio
  return [];
}

// This page now redirects to the main portfolio page
// All portfolio functionality is handled client-side in PortfolioContent
export default function PortfolioDetailPage() {
  redirect("/portfolio");
}
