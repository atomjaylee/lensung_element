Page({
  data: {
    source: [
      { num_iid: "4", pic_url: "https://img.alicdn.com/bao/uploaded/i3/1607346058/O1CN01RJYZiq1ucc2t8kREI_!!0-item_pic.jpg_240x240", title: "童装一件代发女童套装钉珠飞袖T恤+半身裙2021夏装新款外贸3-9岁童装一件代发女童套装钉珠飞袖T恤+半身裙2021夏装新款外贸3-9岁" },
      { num_iid: "5", pic_url: "https://img.alicdn.com/bao/uploaded/i3/O1CN01I1N5n61ucc3u4EgY9_!!0-fleamarket.jpg_240x240", title: "自用的小米11闲置了，" },
      { num_iid: "6", pic_url: "https://img.alicdn.com/bao/uploaded/i3/O1CN01I1N5n61ucc3u4EgY9_!!0-fleamarket.jpg_240x240", title: "自用的小米11闲置了，想要的可以私聊，配置很强大，支持5g，" },
    ],
    checkedList: [
      { num_iid: "5", pic_url: "https://img.alicdn.com/bao/uploaded/i3/O1CN01I1N5n61ucc3u4EgY9_!!0-fleamarket.jpg_240x240", title: "自用的小米11闲置了，想要的可以私聊，配置很强大，支持5g，" },
    ]
  },
  onLoad() { },

  onCheckedChangeHandler(checkedList) {
    this.setData({ checkedList })
  },
});
