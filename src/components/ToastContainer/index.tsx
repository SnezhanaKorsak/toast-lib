import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';

import { Toast, ToastParams } from 'ToastService/types';

import ToastItem from 'components/ToastItem';

import toastService, { RefType } from 'ToastService';
import { StyledToastContainer } from 'components/ToastContainer/styled';
import ErrorBoundary from 'components/ErrorBoundary';

const ToastContainer = forwardRef<RefType, ToastParams>(
  ({ position, autoClose, autoCloseTime, animation }, ref) => {
    const [portal] = useState<HTMLElement>(document.body);
    const [toastsList, setToastsList] = useState<Toast[]>([]);

    const { getAllToasts, removeToast } = toastService;

    useEffect(() => {
      const interval = setTimeout(() => {
        if (autoClose && toastsList.length) {
          removeToast(toastsList[0].id);
        }
      }, autoCloseTime);

      return () => {
        clearTimeout(interval);
      };
    }, [autoClose, autoCloseTime, toastsList]);

    const handleShowToasts = useCallback(() => {
      const toasts = getAllToasts();
      setToastsList(toasts);
    }, []);

    useImperativeHandle(ref, () => ({
      onshowToast: handleShowToasts,
    }));

    const handleClose = (id: string) => () => {
      removeToast(id);
    };

    return ReactDOM.createPortal(
      <ErrorBoundary>
        <StyledToastContainer position={position}>
          {toastsList.map(({ id, ...restProps }) => (
            <ToastItem key={id} {...restProps} onClose={handleClose(id)} />
          ))}
        </StyledToastContainer>
      </ErrorBoundary>,
      portal,
    );
  },
);

export default ToastContainer;
