//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    show1:'0',
    show2:'0',
    show3:'0',
    show4:'0',
    show5:'0',
    menuShow:'0',
    greet:'Hello',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    let myDate = new Date();
    let ntime = myDate.getHours();
    if(6<ntime&&ntime<12){
      this.setData({
        greet:'Sunshine '
      });
    }else if(12<ntime&&ntime<18){
      this.setData({
        greet: 'Passion'
      });
    }else if(18<ntime&&ntime<22){
      this.setData({
        greet: 'Enjoy'
      });
    }else{
      this.setData({
        greet: 'Lullaby'
      });
    }
    setTimeout(() => {
      this.setData({
        show1: '1'
      })
    }, 1000);
    setTimeout(() => {
      this.setData({
        show2: '1'
      })
    }, 600);
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  menuon: function () {
    this.setData({
      menuShow:'1'
    });
  },
  menuoff: function () {
    this.setData({
      menuShow: '0'
    });
    conosole.log(this)
  }
})
