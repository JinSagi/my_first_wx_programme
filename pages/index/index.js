//index.js
//获取应用实例
const app = getApp()
module.exports=function(){
  wx.showToast({
    title: '成功执行index.js中的函数',
  })
}

Page({
  data: {
    background: ['/images/swiper01.jpg', '/images/swiper02.jpg', '/images/swiper03.jpg'],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    proList2:null,
    proList:[
      {
        logo:"/images/pro_01.jpg",
        title:"精英贷",
        desc:"22周岁以上即可\n最快3小时下款\n件均8万，最高20万"
      },
      {
        logo:"/images/pro_02.jpg",
        title:"月供贷",
        desc:"不看工作，不看流水\n不限地区，无须家人签字\n最高可借150万"
      },{
        logo:"/images/pro_03.jpg",
        title:"保险贷",
        desc:"不看工作，不看流水\n不限地区，无须家人签字\n最高可借150万"
      }
    ],
  },
  toDetail:function(e){
    console.log(e)
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var proList= this.data.proList;
    var title=proList[index].title;
    wx.setStorageSync("key","我在农行研发中心任职")
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title,
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow:function(){
    wx.showToast({
      title: '试试',
    })
  },
  onLoad: function () {
    this.getProlist();
  },
  getProlist:function(){
    var self = this;
    wx.request({
      url:'',
      method:'GET',
      success:function(res){
        console.log(res)
        self.setData({
          proList2:res.data,
        })
      }
    })
  },
  onSubmitEvent:function(e){
    if(e.detail.value.username!='sj'){
      wx.showToast({
        title:"用户名错误",
        icon:'none',
        duration:1500
      })
    }
    else{
    console.log(e)
    wx.getBatteryInfo({
      success:res => {
       wx.showToast({
         title: "成功",
         icon:'success',
         duration:1000
       })
       this.setData({
        battery: res.level
      })
      }
    })}
  },
   copy:function(){
     console.log(app.globalData.host)
     if(wx.canIUse("setClipboardData")){
      wx.setClipboardData({
        data: 'lksjdflksajdfl',
        success:
        (res) => {
        wx.getClipboardData({
         success: (option) => {console.log(option)
         wx.showModal({
           title:'提示',
           content:'内容已经复制成功'
         })
         },
         })
        }
      })
     }else{
       wx.showModal({
         title:'提示',
         content:'您的微信版本太低，请升级'
       })
     }
     
   }

  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
