import React from 'react';
import { v1 } from 'uuid';

import { DefaultToastParams, Toast, ToastParams } from 'ToastService/types';

export type RefType = {
  onshowToast: () => void;
};

class ToastService {
  toasts: Toast[] = [];

  toastRef = {
    onshowToast: () => {},
  };

  public init = (ref: RefType | null) => {
    if (ref) {
      this.toastRef = ref;
    }
  };

  public getAllToasts = () => this.toasts;

  static generateToast = (
    defaultOptions: DefaultToastParams,
    toastOptions: ToastParams,
  ): Toast => ({
    id: v1(),
    ...toastOptions,
    mode: toastOptions.mode ? toastOptions.mode : defaultOptions.mode,
    title: toastOptions.title || defaultOptions.title,
    message: toastOptions.message || defaultOptions.message,
    backgroundColor: toastOptions.backgroundColor || defaultOptions.backgroundColor,
    textColor: toastOptions.textColor || defaultOptions.textColor,
    icon: defaultOptions.icon,
  });

  public addToast(defaultOptions: DefaultToastParams, toastOptions: ToastParams) {
    if (this.toasts.length < 3) {
      this.toasts = [...this.toasts, ToastService.generateToast(defaultOptions, toastOptions)];
    } else {
      this.toasts = [
        ...this.toasts.splice(1),
        ToastService.generateToast(defaultOptions, toastOptions),
      ];
    }
    this.toastRef.onshowToast();
  }

  public removeToast = (toastId: string) => {
    this.toasts = this.toasts.filter((toast) => toast.id !== toastId);
    this.toastRef.onshowToast();
  };
}

const toastService = new ToastService();

export default toastService;
