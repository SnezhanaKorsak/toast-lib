import { ToastMode } from 'constants/options';

export type DefaultToastParams = {
  mode: ToastMode;
  title: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
};

export type CommonToastParams = {
  padding: string;
  position: string;
  autoClose: boolean;
  autoCloseTime: number;
  animation: string;
};

export type ToastParams = DefaultToastParams & CommonToastParams;

export type Toast = ToastParams & {
  id: string;
};

export type ToastPosition = {
  [key: string]: { [key: string]: string };
};
