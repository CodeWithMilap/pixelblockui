import type { Metadata } from "next";
import { Inter, Arimo } from "next/font/google";
import "./globals.css";
import {
  storyblokInit,
  apiPlugin,
  ISbStoriesParams,
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });
const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "ca",
  },
});

export const metadata: Metadata = {
  title: "PixelBlockUI - Tailwind CSS & React Component CLI Tool",
  description: "Streamline your development process with PixelBlockUI. Our CLI tool offers seamless integration of Tailwind CSS and React components into your projects, making UI design effortless and efficient.",
  icons: {
    icon: "/FaviconIcon.png", // /public path
  },
  openGraph: {
    title: "PixelBlockUI - Tailwind CSS & React Component CLI Tool",
    description: "Streamline your development process with PixelBlockUI. Our CLI tool offers seamless integration of Tailwind CSS and React components into your projects, making UI design effortless and efficient.",
    url: "https://pixelblockui.com/", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "/og-image.png", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "PixelBlockUI",
      },
    ],
    siteName: "PixelBlockUI",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await fetchData();

  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <GoogleAnalytics />
        <body
          className={`${inter.className} ${arimo.className}  text-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 flex flex-col min-h-screen`}
        >
          <ThemeProvider attribute="class">
            <Header blok={data?.story?.content} />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StoryblokProvider>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/config`, sbParams);
}
