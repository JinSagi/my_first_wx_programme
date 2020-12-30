//logs.js
const util = require('../../utils/util.js')

var func=require('../index/index')

Page({
  data: {
    logs: [],
    mydata:["one","two","ehree"]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    func()
  },
  onUnload:function(){
    wx.showToast({
      title: '走了？',
    })
  }
})
