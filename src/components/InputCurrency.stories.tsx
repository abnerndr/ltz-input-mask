import InputCurrency, { InputCurrencyProps } from './InputCurrency';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Input/InputCurrency',
  component: InputCurrency,
  argTypes: {
    prefix: {
      options: ['R$', '$'],
      control: { type: 'radio' }
    },
    current: {
      options: ['BRL', 'USD'],
      control: { type: 'radio' }
    }
  }
} as Meta<InputCurrencyProps>;

export const Default: StoryObj = {
  args: {
    id: 'currency',
    name: 'currency',
    label: 'currency',
    placeholder: '',
    error: ''
  }
};
