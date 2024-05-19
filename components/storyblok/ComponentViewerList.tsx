import React from "react";
import ComponentViewer from "../ComponentViewer";

const ComponentViewerList = ({ blok }: any) => {
  return (
    <ComponentViewer
      title={blok?.title}
      code={blok?.code}
      previewUrl={blok?.previewUrl}
    />
  );
};

export default ComponentViewerList;
