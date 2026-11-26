export interface WebsiteCostPlan {
  id: string;
  name: string;
  price: number;
  scope: string;
}

// Only the agreed build price and optional maintenance are included.
// Hosting, domain, licences and additional work stay outside this subtotal.
export function estimateWebsiteCosts(plan: WebsiteCostPlan, monthlyMaintenance: number) {
  const maintenancePerYear = monthlyMaintenance * 12;
  return {
    build: plan.price,
    maintenancePerMonth: monthlyMaintenance,
    firstYear: plan.price + maintenancePerYear,
    followingYear: maintenancePerYear,
  };
}
