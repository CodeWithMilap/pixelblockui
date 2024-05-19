import React from "react";
import Container from "../Container";
import { BlocksIcon } from "../Icons";
import AppButton from "../AppButton";

const HeroSection = ({ blok }: any) => {
  return (
    <section className="w-full py-14 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter dark:text-zinc-50 sm:text-5xl xl:text-6xl/none">
                <span className="text-pxPrimary">PixelBlockUI</span> Beautifully
                Designed UI Components.
              </h1>
              <p className="max-w-[600px]  md:text-xl">
                Beautifully designed components that you can copy and paste into
                your apps. Accessible. Customizable. Open Source.
              </p>
            </div>
            <div className="flex max-w-sm flex-col gap-4 min-[400px]:flex-row">
              <AppButton
                variant="primary"
                href="/components"
                label="View Components"
              />
              <AppButton label="Pricing" variant="outline" className="" />
            </div>
          </div>
          <div className=" hidden justify-end lg:flex">
            <BlocksIcon className="h-full w-full max-w-lg dark:text-zinc-50" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
