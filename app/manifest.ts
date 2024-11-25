import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NoteSphere",
    short_name: "NoteSphere",
    description:
      "NoteSphere - An open-source platform for your all-in-one platform for organizing thoughts, collaborating with teams, and bringing ideas to life.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/6292411f-982f-46b9-ba69-a6393f9a09f4.svg",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/6292411f-982f-46b9-ba69-a6393f9a09f4.svg",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
