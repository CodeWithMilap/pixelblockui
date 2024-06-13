import React, { HTMLProps } from "react";

// Define the props for the Container component.
// It extends HTMLProps<HTMLDivElement> to allow additional HTML attributes.
interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode; // Content to be placed inside the container
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  // Define the default CSS classes for the container.
  // Users can provide a custom class via the 'className' prop.
  const containerClasses = `mx-auto max-w-screen-2xl  px-6 lg:px-20 w-full ${
    className || ""
  }`;

  return (
    // Render the container div with the specified classes and additional props.
    <div className={containerClasses} {...rest}>
      {children} {/* Display the content inside the container */}
    </div>
  );
};

export default Container;
