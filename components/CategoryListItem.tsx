import React from "react";
import Card from "./Card";

const CategoryListItem = ({ blok }: any) => {
  return (
    <Card
      title={blok?.name}
      description={blok?.description}
      link={blok?.route?.cached_url || "#"}
    />
  );
};

export default CategoryListItem;
