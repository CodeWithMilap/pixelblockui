 "use client"
import React, { useEffect, useState, FC } from 'react';
import componentsMap from './components.json';
import * as exampleComponents from './exampleComponents';

interface PreviewProps {
  name: string;
  className?: string;
  description?: string;
}

const Preview: FC<PreviewProps> = ({ name, className, description }) => {
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const componentKey = componentsMap[name as keyof typeof componentsMap];
        if (componentKey && exampleComponents[componentKey as keyof typeof exampleComponents]) {
          setComponent(() => exampleComponents[componentKey as keyof typeof exampleComponents]);
        } else {
          throw new Error(`Component ${name} not found`);
        }
      } catch (error) {
        console.error(`Error loading component ${name}:`, error);
      }
    };

    if (name) {
      loadComponent();
    }
  }, [name]);

  if (!Component) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
      <div className="preview">
        <Component />
      </div>
    </div>
  );
};

export default Preview;
