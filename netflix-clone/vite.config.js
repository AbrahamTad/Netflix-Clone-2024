import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load env variables based on the current mode (e.g., development or production)
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: "/netflix-clone/",
    plugins: [react()],
    define: {
      "process.env": env,
    },
  });
};
