'use client';

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => (
  <main className="" {...storyblokEditable(blok)}>
    {blok?.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
