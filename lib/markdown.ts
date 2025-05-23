import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { FLATTEND_ROUTES } from "./routes-config";

// custom components imports
import Button from "@/components/PixelBlock/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeIcon, EyeIcon } from "@/components/Icons";
import InputField from "@/components/PixelBlock/InputField";
import { Accordion, AccordionItem } from "@/components/PixelBlock/Accordion";
import Preview from "@/components/Preview";
import { IconComponent, IconProfile, LoadingIcon } from "@/utils/Icons";
import Dropdown from "@/components/PixelBlock/Dropdown";
import Alert from "@/components/PixelBlock/Alert";
import Cards from "@/components/PixelBlock/Cards";
import Grid from "@/components/PixelBlock/Grid";
import MenuAccordion from "@/components/PixelBlock/MenuAccordion";
import MarqueeImageScroller from "@/components/PixelBlock/MarqueeImageScroller";
import { Avatar } from "@/components/PixelBlock/Avatar";
import TickerBanner from "@/components/PixelBlock/TickerBanner";
import Logo from "@/components/Logo";
import Title from "@/components/PixelBlock/Title";
import Tooltip from "@/components/PixelBlock/Tootltip";

type MdxFrontmatter = {
  title: string;
  description: string;
};

// add custom components
const components = {
  Button,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  EyeIcon,
  CodeIcon,
  InputField,
  Accordion,
  AccordionItem,
  Preview,
  IconComponent,
  LoadingIcon,
  IconProfile,
  Dropdown,
  Alert,
  Cards,
  Grid,
  MenuAccordion,
  MarqueeImageScroller,
  Avatar,
  TickerBanner,
  Logo,
  Title,
  Tooltip,
};

function getContentPath(slug: string) {
  return path.join(process.cwd(), "/contents/docs/", `${slug}.mdx`);
}

export async function getMarkdownForSlug(slug: string) {
  try {
    const contentPath = getContentPath(slug);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    const { content, frontmatter } = await compileMDX<MdxFrontmatter>({
      source: rawMdx,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeCodeTitles,
            rehypePrism,
            rehypeSlug,
            rehypeAutolinkHeadings,
          ],
          remarkPlugins: [remarkGfm],
        },
      },
      components,
    });
    return { content, frontmatter };
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getToc(slug: string) {
  const contentPath = getContentPath(slug);
  const rawMdx = await fs.readFile(contentPath, "utf-8");

  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    extractedHeadings.push({ level: headingLevel, text: headingText });
  }
  return extractedHeadings;
}

export function getPreviousNext(path: string) {
  const index = FLATTEND_ROUTES.findIndex(({ href }) => href == path);
  return {
    prev: FLATTEND_ROUTES[index - 1],
    next: FLATTEND_ROUTES[index + 1],
  };
}

export function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}
