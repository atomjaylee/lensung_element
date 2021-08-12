interface ItemServerRequest {
  num_iid?: number;
  title?: string;
  pic_url?: string;
  [propName: string]: any;
}

interface BaseItemRowProps {
  source: ItemServerRequest;
  showCheck?: boolean;
  checkGroupId?: string;
  checkIdentify?: string;
}

const defaultProps: BaseItemRowProps = {
  source: {},
  showCheck: false,
  checkIdentify: 'num_iid',
};

Component({
  props: defaultProps,
});
