import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Button from "../PixelBlock/Button";
import InputField from "../PixelBlock/InputField";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { render } from "storyblok-rich-text-react-renderer";
import { CodeIcon, CopyIcon, EyeIcon } from "../Icons";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { CheckCheckIcon } from "lucide-react";
import Link from "next/link";
import Hero1 from '../PixelBlock/Blocks/Heor1'
SyntaxHighlighter.registerLanguage("jsx", jsx);

const Priview = ({ blok }: any) => {
  const customStyle = {
    borderRadius: "0.2rem",
    backgroundColor: "#1e293b",
    padding: "20px",
    margin: '0px',
    zoom: "1.3",
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scope = { Button, InputField, Link, toggleMobileMenu, isMobileMenuOpen, setIsMobileMenuOpen, Hero1 };
  const [copied, setCopied] = useState(false);

  const code = blok?.code;
  console.log(blok);


  const copyCodeToClipboard = () => {
    navigator.clipboard
      .writeText(blok?.priview_code)
      .then(() => {
        // Code successfully copied to clipboard
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => console.error("Failed to copy: ", error));
  };

  return (
    <section className="py-5">
      <Tabs defaultValue="preview" className="" >
        {/* Tabs List */}
        <div className="flex justify-between items-center ">
          <h3 className="!text-2xl !m-0 !font-bold">{blok?.title}</h3>
          <TabsList className="">
            {/* Tab 1 */}
            <TabsTrigger value="preview" className="">
              <EyeIcon className="mr-2 h-4 w-4" />
              Preview
            </TabsTrigger>
            {/* Tab 2 */}
            <TabsTrigger value="code" className="">
              <CodeIcon className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>

          </TabsList>
        </div>

        {/* Tabs Content */}
        {/* Content for Tab 1 */}
        <TabsContent value="preview">
          <div className="border dark:border-white/10 rounded-lg overflow-hidden">
            <LiveProvider code={code} scope={scope}>
              {/* <ResizablePanelGroup
              className="h-full w-full "
              direction="horizontal"
            >
              <ResizablePanel
                defaultSize={100}
                className="rounded-lg border border-zinc-400  dark:border-zinc-600 "
              > */}
              <LiveError />
              <LivePreview />

              {/* </ResizablePanel>
              <ResizableHandle withHandle className="" />
              <ResizablePanel defaultSize={0} />
            </ResizablePanelGroup> */}
            </LiveProvider>
          </div>
        </TabsContent>

        {/* Content for Tab 2 */}
        <TabsContent value="code">
          {/* <LiveEditor /> */}
          <div className="relative ">
            <Button
              variant="ghost"
              className="text-white absolute top-4 right-4"
              onClick={copyCodeToClipboard}
            >
              {copied ? (
                <>
                  <CheckCheckIcon className="mr-2 h-4 w-4" />
                </>
              ) : (
                <>
                  <CopyIcon className="mr-2 h-4 w-4" />
                </>
              )}
            </Button>
            <SyntaxHighlighter
              customStyle={customStyle}
              language="javascript"
              style={vscDarkPlus}
            >

              {render(blok?.priview_code)}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Priview;
