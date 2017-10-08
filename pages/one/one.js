const app = getApp();
const util = require('../../utils/util.js')

var flag = true;
var types = ['default', 'primary', 'warn']

Page({
  data: {
    info:"ahhaha",
    color:"window",
    defaultSize: 'default',
    primarySize: 'mini',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  click: function () {
    console.log("点击了文字");
    if (flag) {
      this.data.color = "window-red";
      flag = false;
    } else {
      this.data.color = "window";
      flag = true;
    }
    this.setData({
      color: this.data.color
    });
  },
  onLoad: function () {
    this.setData({
      // info: (wx.getStorageSync('logs') || []).map(log => {
      //   return util.formatTime(new Date(log))
      // })
    })
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  }


})