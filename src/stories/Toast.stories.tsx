import React from 'react';

import ToastProvider from 'ToastProvider';
import ToastItem from 'components/ToastItem/index';

import { ToastMode, ToastPortalPosition } from 'constants/options';
import { useToastService } from 'hooks';

import { ToastParams } from 'ToastService/types';
import { ShowButton } from 'ToastProvider/styled';

export default {
  title: 'Toast-lib',
  component: ToastItem,
  argTypes: {
    mode: {
      description: 'Type of toast',
      options: Object.values(ToastMode),
      control: { type: 'inline-radio' },
    },
    position: {
      options: Object.values(ToastPortalPosition),
      control: { type: 'inline-radio' },
    },
    animation: {
      options: ['zoom', 'fade', 'slide'],
      control: {
        type: 'inline-radio',
      },
    },
    autoClose: {
      control: {
        type: 'boolean',
      },
    },
    autoCloseTime: {
      control: {
        type: 'number',
      },
    },
  },
};

export const Example = (args: ToastParams) => {
  const { createToast } = useToastService();

  const { mode } = args;

  const addToast = () => createToast(mode, args);

  return (
    <div>
      <ShowButton type="button" onClick={addToast}>
        Show Toast
      </ShowButton>
      <ToastProvider {...args} />
    </div>
  );
};

Example.args = {
  mode: 'info',
  position: 'top-right',
  animation: 'zoom',
  autoClose: true,
  autoCloseTime: 5000,
  title: '',
  message: '',
  backgroundColor: '',
  textColor: '',
  padding: '5',
  icon: '',
};
