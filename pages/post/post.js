// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postList = [{
      object: {
        date: "Jan 28 2017"
      },
      title: "小时候的冰棍儿与雪糕",
      postImg: "/images/post/post-4.jpg",
      avatar: "/images/avatar/avatar-5.png",
      content: "冰棍与雪糕绝对不是同一个东西。3 到 5 毛钱的雪糕犹如现在的哈根达斯，而 5 分 1 毛的冰棍儿就像现在的老冰棍。时过境迁, ...",
      readingNum: 92,
      collectNum: {
        array: [108]
      },
      commentNum: 7
    }, {
      object: {
        date: "Jan 28 2017"
      },
      title: "小时候的冰棍儿与雪糕",
      postImg: "/images/post/post-1.jpg",
      avatar: "/images/avatar/avatar-3.png",
      content: "年少时，有几样东西，是春节里必不可少的：烟花、新衣、凉菜、压岁钱、饺子。年分大小年，有的地方是腊月二十三过小年，有的地方是腊月二十四....",
      readingNum: 92,
      collectNum: {
        array: [108]
      },
      commentNum: 7
    }, {
      object: {
        date: "Jan 28 2017"
      },
      title: "从童年呼啸而过的火车",
      postImg: "/images/post/post-5.jpg",
      avatar: "/images/avatar/avatar-1.png",
      content: "小时候，家的后面有一条铁路。听说从南方北上的火车都必须经过这条铁路。火车大多在晚上经过，但也不定是只有在夜深人静的时候，火车的声音才能从远方传来..",
      readingNum: 92,
      collectNum: {
        array: [108]
      },
      commentNum: 7
    }]
    this.setData({
      postList: postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }


})