/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: "/Netflix-Clone-2024/",
    plugins: [react()],
    define: {
      "process.env": env,
    },
  });
};
