import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yestera — Your past, beautifully present",
    template: "%s | Yestera"
  },
  description:
    "Rediscover photographs, Live Photos and videos captured on this day across the years with Yestera for iPhone.",
  alternates: {
    canonical: "/yestera"
  },
  openGraph: {
    type: "website",
    url: "https://nathandarker.it/yestera",
    title: "Yestera — Your past, beautifully present",
    description:
      "A private, beautifully considered way to rediscover this day across the years.",
    images: [
      {
        url: "/images/yestera/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Yestera app icon"
      }
    ]
  }
};

export default function YesteraLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
