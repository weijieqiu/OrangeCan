var DBPost = function(){
  this.storageKeyName='postList'; // 所有的文章本地缓存存储的键值
}

DBPost.prototype={
  // 得到全部文章信息
  getAllPostData:function(){
    var res = wx.getStorageSync(this.storageKeyName);
    if(!res){
      res = require('../data/data.js').postList;
      this.execStorageSync(res);
    }
    return res;
  },
  execSetStorageSync:function(data){
    wx.setStorageSync(this.storageKeyName, data)
  }
};

module.exports = {
  DBPost: DBPost
}