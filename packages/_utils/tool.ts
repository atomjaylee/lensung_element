/**
 * 获取(toast, dialog, popup)等可命令式或props的的组件上的值
 * @param component - 属性所在的组件
 * @param attrName - 属性的名字
 * @returns - 属性值或undefined
 */
export const getComponentAttr = (component: tinyapp.ComponentOptions, attrName: string): any => {
  return component.data[attrName] ? component.data[attrName] : component.props[attrName];
};

/**
 * 通过元素id获取位置和尺寸信息
 * @param elementId - 元素id
 * @returns - { left, right, top, bottom, width, height }
 */
export const getElementRectById = (elementId: string): Promise<my.IBoundingClientRect> => {
  return new Promise((resolve) => {
    my.createSelectorQuery()
      .select(`#${elementId}`)
      .boundingClientRect()
      .exec(([elementInfo]) => {
        resolve(elementInfo as my.IBoundingClientRect);
      });
  });
};
