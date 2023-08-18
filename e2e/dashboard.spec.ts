import { test, expect } from "@playwright/test"

test("navigate to the dashboard page", async ({ page }) => {
  await page.goto("/dashboard")

  await expect(page).toHaveURL("/dashboard")
  await expect(page.locator("h1")).toContainText("DashboardTemplate.core")
})
