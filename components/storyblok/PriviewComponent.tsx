import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Button from "../PixelBlock/Button";
import InputField from "../PixelBlock/InputField";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../PixelBlock/Tabs";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { render } from "storyblok-rich-text-react-renderer";
import { CodeIcon, CopyIcon, EyeIcon } from "../Icons";
import Hero1 from "../PixelBlock/Hero1";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { CheckCheckIcon } from "lucide-react";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const Priview = ({ blok }: any) => {
  const customStyle = {
    borderRadius: "8px",
    backgroundColor: "#1e293b",
    padding: "20px",
    zoom: "1.3",
  };
  const scope = { Button, InputField, Hero1 };
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
      <h3 className="!text-2xl mb-5 !font-bold">{blok?.title}</h3>
      <Tabs defaultValue="preview" className="" variant="solid">
        {/* Tabs List */}
        <TabsList className="flex justify-end gap-5 pr-5">
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
        {/* <Button
            variant={"outline"}
            onClick={copyCodeToClipboard}
          >
            {copied ? (
              <>
                <CheckCheckIcon className="mr-2 h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <CopyIcon className="mr-2 h-4 w-4" />
                Copy
              </>
            )}
          </Button> */}

        {/* Tabs Content */}
        {/* Content for Tab 1 */}
        <TabsContent value="preview">
          <LiveProvider code={code} scope={scope}>
            <ResizablePanelGroup
              className="h-full w-full "
              direction="horizontal"
            >
              <ResizablePanel
                defaultSize={100}
                className="rounded-lg border border-zinc-400  dark:border-zinc-600 "
              >
                <LivePreview />

              </ResizablePanel>
              <ResizableHandle withHandle className="" />
              <ResizablePanel defaultSize={0} />
            </ResizablePanelGroup>
          </LiveProvider>
        </TabsContent>

        {/* Content for Tab 2 */}
        <TabsContent value="code">
          {/* <LiveEditor /> */}
          {/* <LiveError /> */}
          <div className=" pr-5">
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
