import React, { useState } from "react";
import Container from "../Container";
import { BlocksIcon } from "../Icons";
import Button from "../PixelBlock/Button";
import InputField from "../PixelBlock/InputField";
import { redirect } from "next/navigation";
import Link from "next/link";
import AnimatedSvg from "@/utils/Icons";
import Dropdown from "../PixelBlock/Dropdown";
import ColorGenerator from "../ColorGenerator";

const HeroSection = ({ blok }: any) => {
  return (
    <>
      <section className="w-full py-14 lg:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_420px]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 max-w-xl">
                <h1 className="text-3xl font-bold tracking-tighter dark:text-zinc-50 sm:text-5xl xl:text-6xl/none">
                  <span className="text-primary-500">PixelBlockUI</span>{" "}
                  Beautifully Designed UI Components.
                </h1>
                <p className="max-w-[600px]  md:text-xl">
                  Beautifully designed components that you can copy and paste
                  into your apps. Accessible. Customizable. Open Source.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 max-w-sm gap-4 ">
                <Button color="primary" size="lg">
                  {" "}
                  <Link href="/docs/getting-started/introduction">
                    Get Started
                  </Link>
                </Button>

                {/* <Button variant="outline" color="primary">
                  Pricing
                </Button> */}
              </div>
            </div>
            <div className="  justify-end lg:flex">
              
                <ColorGenerator />
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full bg-pxBackground py-14 dark:bg-zinc-900 md:py-28">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-14">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter dark:text-zinc-50 sm:text-5xl">
                Explore Our Components
              </h2>
              <p className="max-w-[800px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Browse through our comprehensive list of UI components and find
                the perfect ones to build your next project.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6  lg:grid-cols-2 ">
            <div className="bg-white dark:bg-zinc-900/10 rounded-lg border dark:border-white/10 text-card-foreground shadow-sm h-full w-full">
              <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Buttons
                </h2>
                <p className="text-sm text-muted-foreground">
                  Highly customizable buttons with a variety of styles and
                  sizes.
                </p>
              </div>
              <div className="p-6">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
                  <Button color="primary">Primary</Button>
                  <Button variant="outline" color="primary">
                    Outline
                  </Button>
                  <Button variant="ghost" color="primary">
                    Ghost
                  </Button>
                  <Button variant="link" color="primary">
                    Link
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900/10 rounded-lg border dark:border-white/10 text-card-foreground shadow-sm h-full w-full">
              <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Forms
                </h2>
                <p className="text-sm text-muted-foreground">
                  Intuitive and accessible form components, including inputs,
                  textareas, and checkboxes.
                </p>
              </div>
              <div className="p-6">
                <div className="flex flex-col  gap-2 flex-wrap">
                  <form className="space-y-4">
                    <InputField
                      id="name"
                      name="name"
                      placeholder="Name"
                      radius="md"
                      label="Name:"
                    />
                    <InputField
                      id="email"
                      name="email"
                      placeholder="Email"
                      radius="md"
                      label="Email:"
                      type="email"
                    />
                    <InputField
                      id="message"
                      name="message"
                      placeholder="message"
                      radius="md"
                      label="Message:"
                      type="textarea"
                    />
                    <Button color="primary">Submit</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
