import { createToastByType } from 'helpers/createToastByType';
import toastService from 'ToastService';
import { ToastMode, ToastParams } from 'ToastService/types';

export const useToastService = () => {
  const createToast = (mode: ToastMode, options: ToastParams) => {
    const defaultOptions = createToastByType(mode);
    toastService.addToast({ ...defaultOptions }, { ...options });
  };
  return { createToast };
};
