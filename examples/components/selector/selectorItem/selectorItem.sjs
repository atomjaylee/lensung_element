/**
 * 判定是否勾选
 * @param checkedList - 选中列表
 * @param key - 当前selectorItem的check组件绑定的值
 * @param activeKey - source数据中用于作为check组件value的字段
 * @returns boolean
 */
const isChecked = (checkedList, key, activeKey) => {
  return checkedList.some((item) => item[activeKey] === key);
};

export default {
  isChecked,
};
