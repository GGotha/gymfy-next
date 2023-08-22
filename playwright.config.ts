import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testMatch: "e2e/**/*.spec.ts",
  use: {
    baseURL: "http://localhost:3000",
  },
})
