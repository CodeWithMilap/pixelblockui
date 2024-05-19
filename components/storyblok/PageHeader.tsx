import React from "react";
import Container from "../Container";

const PageHeader = ({ blok }: any) => {
  return (
    <section className="w-full bg-pxBackground py-24 dark:bg-zinc-900 md:py-24">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter dark:text-zinc-50 sm:text-5xl">
              {blok?.title}
            </h2>
            <p className="max-w-[800px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              {blok?.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
