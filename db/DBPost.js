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

  // 收藏文章
  collect(){
    return this.updatePostData('collect')
  }

  // 点赞或则取消点赞
  up(){
    var data = this.updatePostData('up');
    return data;
  }

  // 更新本地的点赞、评论信息、收藏、阅读量
  updatePostData(category){
    var itemData = this.getPostItemById(),
        postData = itemData.data,
        allPostData =this.getAllPostData();
    switch(category){
      case 'collect':
        // 处理收藏
        if(!postData.collectionStatus){
          postData.collectionStatus = true;
          postData.collectionNum++;
        }else{
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;
      case 'up':
        if(!postData.upStatus){
          postData.upNum++;
          postData.upStatus = true;
        }else{
          postData.upNum--;
          postData.upStatus = false;
        }
        break;
      default:
        break;
    }

    // 更新缓存数据库
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }


};

export { DBPost}