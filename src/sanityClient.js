import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "iv7fvlb8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2026-02-27",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
