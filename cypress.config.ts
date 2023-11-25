import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

export default defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    video: true,
    async setupNodeEvents(on: any, config: any) {
      on("task", { downloadFile });
      allureWriter(on, config);
      return require("./cypress/plugins")(on, config);
    },
    specPattern: "cypress/e2e/**/*.feature",

    env: {
      allure: true,
      allureAttachRequests: true,
      allureAddVideoOnPass: true,
      screenshotOnRunFailure: true,
      snapshotOnly: true,
    },
  },
});
