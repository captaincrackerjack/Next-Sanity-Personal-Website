import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/";

const config = defineConfig({
  projectId: "c6tlhp2x",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-08-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
