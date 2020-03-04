class DBPost {
  constructor(postId) {
    this.storageKeyName = 'postList';
    this.postId = postId;
  }

  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require('../data/data.js').postList;
      this.execStorageSync(res);
    }
    return res;
  }

  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data)
  }

  // 获取指定 id 号的文章数据
  getPostItemById(){
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for(var i = 0; i < len; i++){
      if(postsData[i].postId == this.postId){
        return{
          index: i,
          data:postsData[i]
        }
      }
    }
  }


};

export { DBPost}