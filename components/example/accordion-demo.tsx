import React, { useState } from 'react';
import { Accordion, AccordionItem } from "@/components/PixelBlock/Accordion";

const AccordionDemo = () => {
  const [items, setItems] = useState([
    { title: 'Item 1', content: 'Dynamic content for item 1' },
    { title: 'Item 2', content: 'Dynamic content for item 2' },
    { title: 'Item 3', content: 'Dynamic content for item 3' },
  ]);

  return (
      <Accordion>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
  );
};

export default AccordionDemo;