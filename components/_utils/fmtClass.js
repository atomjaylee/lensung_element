const hasOwn = {}.hasOwnProperty;
export default function fmtClass(...args) {
  const classList = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;
    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classList.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = fmtClass.apply(null, arg);
      if (inner) classList.push(inner);
    } else if (argType === "object") {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) classList.push(key);
      }
    }
  }

  return classList.join(" ");
}