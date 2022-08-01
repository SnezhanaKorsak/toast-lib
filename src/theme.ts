import infoIcon from 'assets/icons/info.svg';
import errorIcon from 'assets/icons/error.svg';
import successIcon from 'assets/icons/success.svg';
import warningIcon from 'assets/icons/warning.svg';
import closeIcon from 'assets/icons/close.svg';
import { ToastPosition } from 'ToastService/types';

const INFO_COLOR = '#9a40d3';
const ERROR_COLOR = '#e25837';
const SUCCESS_COLOR = '#37e29a';
const WARNING_COLOR = '#f4e048';

const black = '#000000';
const white = '#ffffff';
const grey = '#787272';

const toastPosition: ToastPosition = {
  'top-right': {
    top: '20px',
    right: '20px',
  },
  'top-left': {
    top: '50px',
    left: '20px',
  },
  'bottom-right': {
    right: '20px',
    bottom: '20px',
  },
  'bottom-left': {
    bottom: '20px',
    left: '20px',
  },
};

export const theme = {
  icons: {
    infoIcon,
    errorIcon,
    successIcon,
    warningIcon,
    closeIcon,
  },
  colors: {
    white,
    black,
    grey,
    INFO_COLOR,
    ERROR_COLOR,
    SUCCESS_COLOR,
    WARNING_COLOR,
  },
  sizes: {
    widths: [30, 40, 50, 110, 370, 600],
    spaces: [0, 5, 10, 20, 32],
    fontSizes: [16, 18, 20, 24, 26],
    fontWeight: [300, 400, 700],
  },
  duration: {
    ms300: 0.3,
    ms500: 0.5,
  },
  toastPosition,
  borderRadius: 5,
  fontFamily: 'Roboto, sans-serif',
};
