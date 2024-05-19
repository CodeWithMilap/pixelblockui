"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import { CopyIcon, CodeIcon, EyeIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { render } from "storyblok-rich-text-react-renderer";
import { CheckCheckIcon } from "lucide-react";

SyntaxHighlighter.registerLanguage("jsx", jsx);

// Define prop types
interface ComponentViewerProps {
  code: string;
  previewUrl: string;
  title?: string;
}

const ComponentViewer: React.FC<ComponentViewerProps> = ({
  code,
  previewUrl,
  title,
}) => {
  const [showPreview, setShowPreview] = useState(true);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number | null>(null);

  const customStyle = {
    borderRadius: "8px",
    backgroundColor: "#1e293b",
    padding: "20px",
    zoom: "1.3",
  };

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        try {
          // Added try-catch to handle cross-origin errors
          const contentHeight =
            iframeRef.current.contentWindow?.document?.body?.scrollHeight || 0;
          if (contentHeight !== iframeHeight) {
            setIframeHeight(contentHeight);
          }
        } catch (error) {
          console.error("Error accessing iframe content:", error);
        }
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", resizeIframe);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", resizeIframe);
    };
  }, [iframeHeight]);

  const copyCodeToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // Code successfully copied to clipboard
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => console.error("Failed to copy: ", error));
  };

  const handleIframeLoad = () => {
    if (iframeRef.current) {
      try {
        // Added try-catch to handle cross-origin errors
        const contentHeight =
          iframeRef.current.contentWindow?.document.body.scrollHeight || 0;
        setIframeHeight(contentHeight);
      } catch (error) {
        console.error("Error accessing iframe content on load:", error);
      }
    }
  };

  return (
    <section className="w-full py-12">
      <Container>
        <>
          <Tabs defaultValue="account" className="">
            <div className="flex items-center justify-between gap-5 pr-5">
              <div className="font-bold text-zinc-900">{title}</div>
              <div className="flex gap-5">
                <TabsList className="rounded-md">
                  <TabsTrigger value="account" className="rounded-md">
                    <EyeIcon className="mr-2 h-4 w-4" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="password" className="rounded-md">
                    <CodeIcon className="mr-2 h-4 w-4" /> Code{" "}
                  </TabsTrigger>
                </TabsList>
                <Button
                  size={"default"}
                  variant={"outline"}
                  onClick={copyCodeToClipboard}
                >
                  {copied ? (
                    <>
                      <CheckCheckIcon className='mr-2 h-4 w-4' />
                      Copied
                    </>
                  ) : (
                    <>
                      <CopyIcon className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
            <TabsContent value="account">
              <ResizablePanelGroup
                className="h-full w-full "
                direction="horizontal"
              >
                <ResizablePanel
                  defaultSize={100}
                  className="rounded-lg border border-zinc-400  dark:border-zinc-600 "
                >
                  <iframe
                    src={previewUrl}
                    ref={iframeRef}
                    className="h-full min-h-56 w-full border-none "
                    onLoad={handleIframeLoad}
                    style={{ height: iframeHeight || "" }}
                  ></iframe>
                </ResizablePanel>
                <ResizableHandle withHandle className="" />
                <ResizablePanel defaultSize={0} />
              </ResizablePanelGroup>
            </TabsContent>
            <TabsContent value="password">
              <SyntaxHighlighter
                customStyle={customStyle}
                language="javascript"
                style={vscDarkPlus}
              >
                {render(code)}
              </SyntaxHighlighter>
            </TabsContent>
          </Tabs>
        </>
      </Container>
    </section>
  );
};

export default ComponentViewer;
