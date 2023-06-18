/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import InputPhone, { InputPhoneProps } from './InputPhone';

export default {
  title: 'Input/InputPhone',
  component: InputPhone,
  argTypes: {
    maskPhone: {
      options: ['cell', 'phone'],
      control: { type: 'radio' }
    }
  }
} as Meta<InputPhoneProps>;

export const Default: StoryObj = {
  args: {
    id: 'phone',
    name: 'phone',
    label: 'phone',
    placeholder: '',
    error: ''
  }
};
