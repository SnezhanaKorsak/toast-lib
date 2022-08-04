import React, { useLayoutEffect, useRef } from 'react';

import ToastContainer from 'components/ToastContainer';
import toastService from 'ToastService';

import { ToastParams } from 'ToastService/types';

const ToastProvider: React.FC<ToastParams> = (toastOptions) => {
  const toastRef = useRef(null);

  useLayoutEffect(() => {
    toastService.init(toastRef.current);
  }, []);

  return <ToastContainer ref={toastRef} {...toastOptions} />;
};

export default ToastProvider;
