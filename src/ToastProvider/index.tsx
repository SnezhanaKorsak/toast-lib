import React, { useLayoutEffect, useRef } from 'react';

import ToastContainer from 'components/ToastContainer';
import toastService from 'ToastService';

import { ToastParams } from 'ToastService/types';
import { createToastByType } from 'helpers/createToastByType';
import { ShowButton } from 'ToastProvider/styled';

const ToastProvider: React.FC<ToastParams> = (toastOptions) => {
  const toastRef = useRef(null);

  const { mode } = toastOptions;

  useLayoutEffect(() => {
    toastService.init(toastRef.current);
  }, []);

  const createToast = () => {
    const defaultOptions = createToastByType(mode);
    toastService.addToast({ ...defaultOptions }, { ...toastOptions });
  };
  return (
    <>
      <ShowButton id="buttonR" type="button" onClick={createToast}>
        Show Toast
      </ShowButton>
      <ToastContainer ref={toastRef} {...toastOptions} />
    </>
  );
};

export default ToastProvider;
