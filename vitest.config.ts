import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    attachmentsDir: "artifacts/vitest/attachments",
    include: ["test/suite/unit/**/*.spec.ts"],
    coverage: {
      include: ["src/**/*.ts"],
    },
  },
});
