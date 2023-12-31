const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  modulePathIgnorePatterns: ["<rootDir>/e2e"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
