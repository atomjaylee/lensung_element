const fmtStyle = (checkedBackground, checkedBorderColor, checkedColor, disabled, localChecked) => {
  if (localChecked) {
    const style = `background-color: ${checkedBackground};border-color:${checkedBorderColor};color:${checkedColor};`;
    if (disabled) {
      return `${style}; opacity: 0.25;`;
    } else {
      return style;
    }
  } else {
    return '';
  }
};

export default {
  fmtStyle,
};
