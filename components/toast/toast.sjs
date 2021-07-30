const fmtIcon = (icon) => {
  switch (icon) {
    case 'success':
      return 'icon-chenggong';
    case 'error':
      return 'icon-shibai';
    default:
      return icon;
  }
};

export default {
  fmtIcon,
};
