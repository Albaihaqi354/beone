import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BeOne — Digital Development Studio",
    short_name: "BeOne",
    description:
      "BeOne membantu individu dan bisnis membangun website serta solusi digital sesuai kebutuhan mereka.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5f0",
    theme_color: "#1a1714",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
