import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import Container from "../Container";
import { StoryblokComponent } from "@storyblok/react/rsc";

const ContentBlock = ({ blok }: any) => {
  return (
    <Container>
      <div className="prose mx-auto prose-a:no-underline lg:prose-xl lg:prose-p:mt-0 lg:prose-pre:mt-2 py-10 prose-th:text-left dark:prose-strong:text-zinc-50 dark:prose-code:text-primary-500 dark:text-zinc-200 dark:prose-headings:text-zinc-50 prose-h3:mt-0 max-w-none">
        {render(blok.content, {
          defaultBlokResolver: (name, props) => {
            const blok = { ...props, component: name };
            return <StoryblokComponent blok={blok} key={props._uid} />;
          },
        })}
      </div>
    </Container>
  );
};

export default ContentBlock;
