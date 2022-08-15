import React, { useLayoutEffect, useRef } from 'react';

import ToastContainer from 'components/ToastContainer';
import ToastService from 'ToastService';

import { ToastParams } from 'ToastService/types';

export const toastService = new ToastService();

const ToastProvider: React.FC<ToastParams> = (toastOptions) => {
  const toastRef = useRef(null);

  useLayoutEffect(() => {
    toastService.init(toastRef.current);
  }, []);

  return <ToastContainer ref={toastRef} {...toastOptions} />;
};

export default ToastProvider;
