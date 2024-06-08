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
  title:
    "PixelBlockUI - Next.js and Tailwind CSS UI Components for Stunning Web Designs",
  description:
    "Explore PixelBlockUI's extensive collection of Next.js and Tailwind CSS UI components designed to enhance your web projects. From customizable buttons to responsive forms, PixelBlockUI provides the tools you need to create stunning web designs effortlessly.",
  icons: {
    icon: "/favicon.png", // /public path
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
