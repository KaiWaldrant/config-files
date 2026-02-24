/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // This means we don't have to import `describe`,
    // `it`, and `expect` into every test file
    globals: true,
  },
});
