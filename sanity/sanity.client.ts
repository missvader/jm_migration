import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "v0giy5uw",
  dataset: "production",
  apiVersion: "2023-08-29",
  useCdn: false,
};

const client = createClient(config);

export default client;