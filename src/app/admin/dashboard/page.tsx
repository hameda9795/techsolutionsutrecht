import { requireAdminPage } from "@/lib/admin-auth";
import AdminDashboard from "./AdminDashboard";
export const dynamic = "force-dynamic";
export default async function Page() {
  await requireAdminPage();
  return <AdminDashboard />;
}
