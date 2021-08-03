/**
 * 获取(toast, dialog, popup)等可命令式或props的的组件上的值
 * @param component - 属性所在的组件
 * @param attrName - 属性的名字
 * @returns - 属性值或undefined
 */
export const getComponentAttr = (component, attrName) => {
  return component.data[attrName] ? component.data[attrName] : component.props[attrName];
};