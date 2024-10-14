import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    include: ["test/suite/unit/**/*.spec.ts"],
    coverage: {
      include: ["src/**/*.ts"],
    },
  },
});
