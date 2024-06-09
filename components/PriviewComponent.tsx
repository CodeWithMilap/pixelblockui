import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Button from './PixelBlock/Button';
import InputField from './PixelBlock/InputField';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './PixelBlock/Tabs';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { render } from "storyblok-rich-text-react-renderer";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const Priview = ({ blok }: any) => {
    const customStyle = {
        borderRadius: "8px",
        backgroundColor: "#1e293b",
        padding: "20px",
        zoom: "1.3",
    };
    const scope = { Button, InputField };

    const code = blok?.code;
    console.log(blok)
    return (
        <section className='py-5'>
            <h3 className='!text-2xl mb-5 !font-bold'>{blok?.title}</h3>
            <LiveProvider code={code} scope={scope}>
                <Tabs defaultValue="preview" className="">
                    {/* Tabs List */}
                    <TabsList className="flex gap-5">
                        {/* Tab 1 */}
                        <TabsTrigger value="preview" className="">
                            Preview
                        </TabsTrigger>
                        {/* Tab 2 */}
                        <TabsTrigger value="code" className="">
                            Code
                        </TabsTrigger>
                    </TabsList>

                    {/* Tabs Content */}
                    {/* Content for Tab 1 */}
                    <TabsContent value="preview">
                        <div className="bg-white dark:bg-zinc-900/10 rounded-lg border dark:border-white/10 shadow-sm h-full w-full py-4 px-2">
                            <div className='max-w-full py-4 px-2 w-full h-full overflow-x-auto'>
                                <LivePreview />
                            </div>
                        </div>
                    </TabsContent>
                    {/* Content for Tab 2 */}
                    <TabsContent value="code">
                        {/* <LiveEditor /> */}
                        {/* <LiveError /> */}
                        <SyntaxHighlighter
                            customStyle={customStyle}
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {render(code)}
                        </SyntaxHighlighter>
                    </TabsContent>
                </Tabs>

            </LiveProvider>
        </section>
    )
}

export default Priview

