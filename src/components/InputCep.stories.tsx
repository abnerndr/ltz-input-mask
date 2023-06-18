import InputCep, { InputCepProps } from "./InputCep";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Input/InputZipCode",
  component: InputCep,
} as Meta<InputCepProps>;

export const Default: StoryObj = {
  args: {
    id: "cep",
    name: "cep",
    placeholder: "",
    label: "cep",
    prefix: "",
  },
};
