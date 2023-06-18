import InputZipCode, { InputZipCodeProps } from "./InputZipCode";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Input/InputZipCode",
  component: InputZipCode,
} as Meta<InputZipCodeProps>;

export const Default: StoryObj = {
  args: {
    id: "cep",
    name: "cep",
    placeholder: "",
    label: "cep",
    prefix: "",
  },
};
