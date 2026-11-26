import { requireAdminPage } from "@/lib/admin-auth";
import AdminProjecten from "./AdminProjecten";
export const dynamic = "force-dynamic";
export default async function Page() {
  await requireAdminPage();
  return <AdminProjecten />;
}
