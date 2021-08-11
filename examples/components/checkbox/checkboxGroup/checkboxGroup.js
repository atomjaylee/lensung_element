
Component({
  props: {
    checkedValue: [],
    force:false
  },
  onInit() {
    this.$group_id = this.props.id || '';
    this.$identify = this.props.identify;                                     // 选项组标识
    this.$checkbox = [];
    this.$checked_map = new Map();
    this.initCheckedValue(this.props.checkedValue);
    Object.defineProperty(this.$page, `$checkbox_group_${this.$group_id}`, {  // 注册组件到页面
      get: () => ({
        register: this.register.bind(this),
        logout: this.logout.bind(this),
        onChange: this.onChange.bind(this),
        update: this.update.bind(this)
      }),
      configurable: true
    })
  },
  deriveDataFromProps(nextProps) {
    if (this.$inner_change&&!this.props.force) {                                         // 状态改变由组件内部引起（无需同步子组件状态）
      this.$inner_change = false;                                     // 置空标记
    } else {
      if (nextProps.checkedValue !== this.props.checkedValue) {       // 外部设置checkedValue
        this.initCheckedValue(nextProps.checkedValue);                // 重置选中值
        this.$checkbox.forEach(checkbox => {   // 同步子组件状态
          const key = this.getKey(checkbox.props.value);      // 获取子组件key
          if (this.$checked_map.has(key)) {
            checkbox.update(true);
          } else {
            checkbox.update(false);
          }
        })
      }
    }
  },
  methods: {
    /**
     * 初始化选中值map
     */
    initCheckedValue(checkedValue) {
      this.$checked_map.clear();
      checkedValue.forEach(value => {
        const key = this.getKey(value);
        this.$checked_map.set(key, value);
      })
    },
    /**
     * 选项改变事件
     */
    onChange(child, event) {
      event.detail = { ...event.detail, value: child.props.value };
      const { onChange, limit } = this.props;
      const key = this.getKey(child.props.value);         // 获取子组件的mapKey
      if (!this.$checked_map.has(key)) {                  // 新增选项 
        if ((limit || limit == 0) &&
          this.$checked_map.size >= parseInt(limit)) {    // 选中值超过个数限制
          onChange(null, event);
          return
        }
        event.detail.checked = true;
        child.update(true);                              // 更新子组件状态
        this.$checked_map.set(key, child.props.value);   // 设置选中值
      } else {                                           // 减少选项
        event.detail.checked = false;
        child.update(false);                                 // 更新子组件状态
        this.$checked_map.delete(key);                       // 删除选中值
      }
      this.$inner_change = true;                                            // 内部改变标记
      onChange([...this.$checked_map.values()], event);          // 触发onChange事件
    },
    /**
     * 获取map中存放的key
     */
    getKey(item) {
      const result = item[this.$identify] || item;
      return typeof result === 'object' ? result : `${result}`;
    },
    register(child) {
      this.$checkbox.push(child)                        // 注册子组件
      const key = this.getKey(child.props.value);       // 获取子组件的mapKey
      this.$checked_map.has(key) && child.update(true); // 设置子组件初始状态
    },
    logout(child) {
      this.$checkbox.splice(this.$checkbox.indexOf(child), 1);    // 删除子组件
    },
    /**
     * 组件更新
     */
    update(child, nextProps) {
      const key = this.getKey(child.props.value);     // 当前值
      const nextKey = this.getKey(nextProps.value);   // 将要更新的值
      if (key !== nextKey) {          // 组件value发生变化
        const checked = this.$checked_map.get(nextKey);    // 查找是否已选中
        child.update(!!checked);                           // 更新状态
      }
    }
  }
});
