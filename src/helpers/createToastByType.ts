import { theme } from 'theme';

import { ToastMode } from 'constants/options';

export const createToastByType = (type: ToastMode) => {
  switch (type) {
    case ToastMode.INFO:
      return {
        mode: ToastMode.INFO,
        title: 'Info toast',
        message: 'Info toast example',
        backgroundColor: theme.colors.INFO_COLOR,
        textColor: theme.colors.white,
        icon: theme.icons.infoIcon,
      };
    case ToastMode.SUCCESS:
      return {
        mode: ToastMode.SUCCESS,
        title: 'Success toast',
        message: 'Success toast example',
        backgroundColor: theme.colors.SUCCESS_COLOR,
        textColor: theme.colors.white,
        icon: theme.icons.successIcon,
      };
    case ToastMode.WARNING:
      return {
        mode: ToastMode.WARNING,
        title: 'Warning toast',
        message: 'Warning toast example',
        backgroundColor: theme.colors.WARNING_COLOR,
        textColor: theme.colors.black,
        icon: theme.icons.warningIcon,
      };
    case ToastMode.ERROR:
      return {
        mode: ToastMode.ERROR,
        title: 'Error toast',
        message: 'Error toast example',
        backgroundColor: theme.colors.ERROR_COLOR,
        textColor: theme.colors.white,
        icon: theme.icons.errorIcon,
      };
    default:
      return {
        mode: ToastMode.INFO,
        title: 'Info toast',
        message: 'Info toast example',
        backgroundColor: theme.colors.INFO_COLOR,
        textColor: theme.colors.white,
        icon: theme.icons.infoIcon,
      };
  }
};
