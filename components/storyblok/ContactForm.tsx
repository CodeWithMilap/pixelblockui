import React from "react";
import InputField from "../PixelBlock/InputField";
import Button from "../PixelBlock/Button";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <InputField
        id="name"
        name="name"
        placeholder="Name"
        radius="md"
        label="Name:"
      />
      <InputField
        id="email"
        name="email"
        placeholder="Email"
        radius="md"
        label="Email:"
        type="email"
      />
      <InputField
        id="message"
        name="message"
        placeholder="message"
        radius="md"
        label="Message:"
        type="textarea"
      />
      <Button color="primary">Send</Button>
    </form>
  );
};

export default ContactForm;
