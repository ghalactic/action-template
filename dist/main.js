// add require()
const require = await (async () => {
	const { createRequire } = await import("node:module");

	return createRequire(import.meta.url);
})();

// src/main.ts
import { info, setFailed } from "@actions/core";

// src/guard.ts
function isError(value) {
  return value instanceof Error;
}

// src/main.ts
main().catch((error) => {
  const stack = isError(error) ? error.stack : void 0;
  setFailed(stack ?? "unknown cause");
});
async function main() {
  info("It's working");
}
//# sourceMappingURL=main.js.map
