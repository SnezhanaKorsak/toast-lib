export type ToastWrapperProps = {
  offsetX: number;
  animation: string;
  reverse: boolean;
};

export type ToastContentProps = {
  backgroundColor: string;
  textColor: string;
};

export type ToastProps = {
  title: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  padding: string;
  position: string;
  animation: string;
  autoClose: boolean;
  autoCloseTime: number;
  icon: string;
  onClose: () => void;
};
