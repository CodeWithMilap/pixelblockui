import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import Container from "../Container";
import { StoryblokComponent } from "@storyblok/react/rsc";



const ContentBlock = ({ blok }: any) => {
  return (
    <Container>
      <div className="prose max-w-none lg:prose-xl dark:prose-strong:text-zinc-50 dark:prose-code:text-pxPrimary dark:text-zinc-200 dark:prose-headings:text-zinc-50">
        {render(blok.content, {
          defaultBlokResolver: (name, props) => {
            const blok = { ...props, component: name };
            return <StoryblokComponent blok={blok} key={props._uid} />;
          }
        })}
      </div>
    </Container>
  );
};

export default ContentBlock;
