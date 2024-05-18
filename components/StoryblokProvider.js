/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import HeroSection from "./HeroSection";
import MenuLink from "@/components/Header/MenuLink";
import CategoryList from "./CategoryList";
import CategoryListItem from "./CategoryListItem";
import PageHeader from "./PageHeader";
import ComponentViewerList from "./ComponentViewerList";
import ContentBlock from "./ContentBlock";
import CodeHighlighter from "./CodeHighlighter";
import Table from "./Table";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  HeroSection: HeroSection,
  menu_link: MenuLink,
  components_categories_list: CategoryList,
  components_categories_list_item: CategoryListItem,
  page_header: PageHeader,
  component_viewer: ComponentViewerList,
  content_block: ContentBlock,
  CodeHighlighter: CodeHighlighter,
  Table: Table
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "ca",
  },
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
