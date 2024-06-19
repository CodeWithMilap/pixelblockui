import React from "react";
import Container from "../Container";
import { StoryblokComponent } from "@storyblok/react";

const ContactSection = ({ blok }: any) => {
  return (
    <section className="py-14 lg:py-28">
      <Container>
        <div className="grid gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter dark:text-zinc-50 sm:text-5xl">
              {blok?.title}
            </h2>
          </div>
          <div className="max-w-lg">
            {blok?.body?.map((nestedBlok: any) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
