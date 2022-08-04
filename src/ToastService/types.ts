export enum ToastMode {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum ToastPortalPosition {
  TOP_RIGHTS = 'top-right',
  TOP_LEFTS = 'top-left',
  BOTTOM_RIGHTS = 'bottom-right',
  BOTTOM_LEFTS = 'bottom-left',
}

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
