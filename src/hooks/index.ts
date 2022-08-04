import { createToastByType } from 'helpers/createToastByType';
import toastService from 'ToastService';
import { ToastParams } from 'ToastService/types';
import { ToastMode } from 'constants/options';

export const useToastService = () => {
  const createToast = (mode: ToastMode, options: ToastParams) => {
    const defaultOptions = createToastByType(mode);
    toastService.addToast({ ...defaultOptions }, { ...options });
  };
  return { createToast };
};
