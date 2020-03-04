//app.js

App({
  onLaunch: function () {
    var storageData = wx.getStorageSync('postList');
    if (!storageData){
      var dataObj = require("data/data.js")
      wx.clearStorageSync();
      wx.setStorageSync('postList', dataObj.postList);
    }
    // 展示本地存储能力
 
  }
})