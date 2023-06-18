import InputCurrency, { InputCurrencyProps } from "./InputCurrency";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Input/InputCurrency",
  component: InputCurrency,
} as Meta<InputCurrencyProps>;

export const Default: StoryObj = {
  args: {
    id: "currency",
    name: "currency",
    placeholder: "R$",
    label: "currency",
    prefix: "",
  },
};