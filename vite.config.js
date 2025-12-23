import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mini-lms-react-mui/"   // 🔥 repo name EXACT-aa
});
