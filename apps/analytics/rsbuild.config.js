import { createRsbuildConfig } from "@commerceos/tooling/rsbuild";

export default createRsbuildConfig({
  port: 3001,
  moduleFedration: {
    name: "analytics",
    fileName: "remoteEntry.js",
    exposes: {
      "./index.screen": "./src/screens/analytics.index.tsx",
    },
    shared: {
      react: {
        singleton: true,
      },
      "react-dom": {
        singleton: true,
        import: false,
      },
      "@tanstack/react-query": {
        singleton: true,
        import: false,
      },
    },
  },
});
