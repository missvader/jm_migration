import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "dg7by6io",
  dataset: "production",
  title: "julianmoya",
  apiVersion: "2023-08-25",
  basePath: "/admin",
  plugins: [
    deskTool()
  ]
})

export default config;