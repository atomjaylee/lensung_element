interface ItemServerRequest {
  num_iid?: number;
  title?: string;
  pic_url?: string;
  [propName: string]: any;
}

interface BaseItemRowProps {
  source: ItemServerRequest;
}

const defaultProps: BaseItemRowProps = {
  source: {},
};

Component({
  props: defaultProps,
});
