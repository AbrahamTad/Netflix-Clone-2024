import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load env variables based on the current mode 
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react()],
    base: "netflix-clone",

    define: {
      "process.env": env,
    },
  });
};
