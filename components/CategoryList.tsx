import React from "react";
import Container from "./Container";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const CategoryList = ({ blok }: any) => {
  return (
    <section className="w-full py-10" {...storyblokEditable(blok)}>
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {blok?.body?.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryList;
