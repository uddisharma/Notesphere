import { Metadata } from "next";

export function constructMetadata({
  title = `NoteSphere`,
  description = `NoteSphere: An open-source platform for your all-in-one platform for organizing thoughts, collaborating with teams, and bringing ideas to life.`,
  image = "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/e69b9260-1fca-4b89-b7f0-46e882150c3e.png",
  video,
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/6292411f-982f-46b9-ba69-a6393f9a09f4.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/6292411f-982f-46b9-ba69-a6393f9a09f4.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/6292411f-982f-46b9-ba69-a6393f9a09f4.svg",
    },
  ],
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  icons?: Metadata["icons"];
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const HOME_DOMAIN = "https://notion.deepakbhardwaj.me/";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }),
      ...(video && {
        videos: video,
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      ...(video && {
        player: video,
      }),
      creator: "@dubdotco",
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
