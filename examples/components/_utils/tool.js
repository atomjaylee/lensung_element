/**
 * 获取(toast, dialog, popup)等可命令式或props的的组件上的值
 * @param component - 属性所在的组件
 * @param attrName - 属性的名字
 * @returns - 属性值或undefined
 */
export const getComponentAttr = (component, attrName) => {
  return component.data[attrName] !== undefined ? component.data[attrName] : component.props[attrName];
};

/**
 * 获取toast, dialog, popup等命令式或props的组件值
 * @param component - 目标组件
 * @param attrName - 属性名
 * @param cacheName - 缓存在data上对象的属性名
 * @returns - 属性或undefined
 */
export const getMultiComponentAttr = (component, attrName, cacheName = 'propData') => {
  return component.data[cacheName][attrName] ? component.data[cacheName][attrName] : component.props[attrName];
};

/**
 * 通过元素id获取位置和尺寸信息
 * @param elementId - 元素id
 * @returns - { left, right, top, bottom, width, height }
 */
export const getElementRectById = elementId => {
  return new Promise(resolve => {
    my.createSelectorQuery().select(`#${elementId}`).boundingClientRect().exec(([elementInfo]) => {
      resolve(elementInfo);
    });
  });
};

/**
 * 深拷贝
 * @param obj - 需要拷贝的目标
 * @returns - 不可变的拷贝信息
 */
export const deepClone = obj => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const _clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      _clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return _clone;
};

// 目标是否为对象
export const isObject = target => {
  return Object.prototype.toString.call(target) === '[object Object]';
};

// 目标是否为字符串
export const isString = target => {
  return Object.prototype.toString.call(target) === '[object String]';
};