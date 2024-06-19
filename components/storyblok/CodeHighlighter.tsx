import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
const CodeHighlighter = ({ blok }: any) => {
  const customStyle = {
    borderRadius: "8px",
    backgroundColor: "#1e293b",
    padding: "20px",
    zoom: "1.3",
  };
  return (
    <div className="my-5">
      <SyntaxHighlighter
        customStyle={customStyle}
        language="javascript"
        style={vscDarkPlus}
      >
        {blok.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
