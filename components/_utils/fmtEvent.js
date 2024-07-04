export default function fmtEvent(props, e) {
  const dataset = {};

  for (const key in props) {
    if (/^data-.*/.test(key)) {
      let dataKey = getKey(key);
      dataset[dataKey] = props[key];
    }
  }

  return Object.assign({}, e, {
    currentTarget: {
      dataset
    },
    target: {
      dataset,
      targetDataset: { ...(e.target.targetDataset || {}),
        ...dataset
      }
    }
  });
}
/**
 * 提取 data- 后的内容，删除 - 且将 - 后的第一个字符改为大写
 * @param {string} key dataset key eg.data-userId
 */

function getKey(key) {
  return key.replace(/(^data-)|(-)(.)/g, (match, f, s, t) => {
    if (s && t) {
      return t.toUpperCase();
    }

    return '';
  });
}