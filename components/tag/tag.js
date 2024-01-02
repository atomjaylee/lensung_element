import fmtClass from '../_utils/fmtClass';
import { isString } from '../_utils/tool';
const defaultProps = {
  type: 'fill',
  hidden: false,
  fontColor: '#333',
  fillColor: '#f2f2f2'
};
Component({
  props: defaultProps,
  data: {
    baseClasses: ''
  },

  onInit() {
    this.setData({
      baseClasses: this.wrapClasses()
    });
    this.formatStyleBySlotText();
  },

  methods: {
    wrapClasses() {
      const {
        type
      } = this.props;
      const prefixCls = 'ls_tag';
      return fmtClass({
        [`${prefixCls}-${type}`]: type
      });
    },

    // 通过插槽内容，自动设置文字样式
    formatStyleBySlotText() {
      const {
        type,
        $slots
      } = this.props;
      const {
        $default
      } = $slots; // 仅处理插槽内容为文字类型

      if ($default && Array.isArray($default) && $default.length === 1 && isString($default[0])) {
        const slotText = $default[0];
        let _fontColor = defaultProps.fontColor;
        let _fillColor = defaultProps.fillColor;

        switch (slotText) {
          case '闲鱼':
            _fontColor = type === 'fill' ? '#333' : '#ffd944';
            _fillColor = '#ffd944';
            this.setData({
              fontColor: _fontColor,
              fillColor: _fillColor
            });
            break;

          case '新品':
            _fontColor = type === 'fill' ? '#fff' : '#0891fb';
            _fillColor = '#0891fb';
            this.setData({
              fontColor: _fontColor,
              fillColor: _fillColor
            });
            break;

          case '拍卖':
            _fontColor = type === 'fill' ? '#fff' : '#f55358';
            _fillColor = '#f55358';
            this.setData({
              fontColor: _fontColor,
              fillColor: _fillColor
            });
            break;

          case '手机详情无':
          case '主图视频无':
            _fontColor = '#f23c3c';
            _fillColor = '#fff2f0';
            this.setData({
              fontColor: _fontColor,
              fillColor: _fillColor
            });
            break;
        }
      }
    }

  }
});