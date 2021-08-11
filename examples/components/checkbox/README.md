```
 <py-checkbox-group limit="12" onChange="onChange" checkedValue="{{checked}}">
    <view a:for="{{items}}" a:for-index="idx">
       <py-checkbox identify="num_iid" value="{{item}}">{{item.name}}</py-checkbox>
    </view>
  </py-checkbox-group>
```