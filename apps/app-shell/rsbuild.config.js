import { createRsbuildConfig } from "@commerceos/tooling/rsbuild";

export default createRsbuildConfig({
  port: 3000,
  moduleFedration: {
    name: "appShell",
    remote: {
      analytics: "analytics@http://localhost:3001/remoteEntry.js",
    },
    shared: {
      react: {
        singleton: true,
      },
      "react-dom": {
        singleton: true,
      },
    },
  },
});
