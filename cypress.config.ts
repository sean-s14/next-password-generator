import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    video: false,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    video: false,
    retries: { runMode: 2 },
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
