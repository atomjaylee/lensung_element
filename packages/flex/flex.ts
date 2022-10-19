import fmtClass from '../_utils/fmtClass';
import fmtEvent from '../_utils/fmtEvent';

export type justifyType = 'start' | 'end' | 'center' | 'between' | 'around';
export type alignType = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type directionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type wrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
export type alignContentType = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';

export interface BaseFlexProps {
  type?: 'flex' | 'inline-flex';
  direction?: directionType;
  wrap?: wrapType;
  justify?: justifyType;
  align?: alignType;
  alignContent?: alignContentType;
  hidden?: boolean;
  className?: string;
  style?: string;
  onTap?: (e: tinyapp.IBaseEvent) => void;
  onAppear?: (e: tinyapp.IBaseEvent) => void;
}

const defaultProps: BaseFlexProps = {
  type: 'flex',
  direction: 'row',
  wrap: 'nowrap',
  justify: 'start',
  align: 'center',
  alignContent: 'start',
  hidden: false,
};

Component({
  props: defaultProps,

  data: {
    baseClass: '',
  },

  onInit() {
    this.setData({ baseClass: this.wrapClasses() });
  },

  methods: {
    wrapClasses() {
      const { type, direction, wrap, justify, align, alignContent } = this.props;

      const prefixCls = 'ls_flex';
      return fmtClass({
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-direction_${direction}`]: direction,
        [`${prefixCls}-wrap_${wrap}`]: wrap,
        [`${prefixCls}-justify_${justify}`]: justify,
        [`${prefixCls}-align_${align}`]: align,
        [`${prefixCls}-alignContent_${alignContent}`]: alignContent,
      });
    },

    onTapHandler(evt) {
      const event = fmtEvent(this.props, evt);
      this.props.onTap && this.props.onTap(event);
    },

    onAppearHandler(evt) {
      const event = fmtEvent(this.props, evt);
      this.props.onAppear && this.props.onAppear(event);
    },
  },
});
