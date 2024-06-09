/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./storyblok/Page";
import Teaser from "./storyblok/Teaser";
import Feature from "./storyblok/Feature";
import Grid from "./storyblok/Grid";
import HeroSection from "./storyblok/HeroSection";
import MenuLink from "@/components/Header/MenuLink";
import CategoryList from "./storyblok/CategoryList";
import CategoryListItem from "./storyblok/CategoryListItem";
import PageHeader from "./storyblok/PageHeader";
import ComponentViewerList from "./storyblok/ComponentViewerList";
import ContentBlock from "./storyblok/ContentBlock";
import CodeHighlighter from "./storyblok/CodeHighlighter";
import Table from "./storyblok/Table";
import ContactForm from "./storyblok/ContactForm";
import ContactSection from "./storyblok/ContactSection";
import PriviewComponent from "./PriviewComponent"
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
  Table: Table,
  PriviewComponent : PriviewComponent,
  ContactSection: ContactSection,
  ContactForm : ContactForm
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
