const calcItemWidth = (schema) => {
  return `${100 / schema.length}%`;
};

const distance = (activeKey, schema) => {
  let targetIndex = 0;
  for (let i = 0; i < schema.length; i++) {
    if (schema[i].key === activeKey) {
      targetIndex = i;
    }
  }
  return (100 / schema.length) * targetIndex + '%';
};

export default {
  calcItemWidth,
  distance,
};
