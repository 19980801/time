// pages/task/task.js
const util = require('../../utils/util.js');
var timer=null;
Page({
  /* 页面的初始数据*/
  data: {
    timer:"",
    min:0,
    sec:0,
    id:0,
    taskname:"",
    isRuning: false,
    img:[
      { id:1, img_url:"http://127.0.0.1:3002/img/work.gif"},
      { id:2, img_url:"http://127.0.0.1:3002/img/study.gif"},
      { id:3, img_url:"http://127.0.0.1:3002/img/think.gif"},
      { id:4, img_url:"http://127.0.0.1:3002/img/write.gif"},
      { id:5, img_url:"http://127.0.0.1:3002/img/read.gif"},
      { id:6, img_url:"http://127.0.0.1:3002/img/play.gif"},
    ]
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    this.setData({
      workTime:options.workTime,
      id:options.id,
      taskname:options.taskname,
    })
    var count_time=this.data.workTime+':00'
    this.count_down(count_time);
  },
  // 倒计时
  count_down:function(count_time){
    var that=this;
    var time=count_time.split(":");
    var min=parseInt(time[0]);
    var sec=parseInt(time[1]);
    this.setData({
      sec:(sec<10)?'0'+sec:sec,
      min:(min<10)?'0'+min:min,
    })
    var Interval=setInterval(function(){
      if(sec>0) sec--;
      if(sec==0){
        if(min>0){
          min--;
          sec=59;
        }else{
          console.log("时间到");
          clearInterval(Interval);
        }
      }
      that.setData({
        sec: (sec < 10) ? '0' + sec : sec,
        min: (min < 10) ? '0' + min : min,
      })
    },1000);
  },
  /* 生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /*生命周期函数--监听页面显示*/
  onShow: function () {

  },

  /*生命周期函数--监听页面隐藏*/
  onHide: function () {

  },

  /*生命周期函数--监听页面卸载*/
  onUnload: function () {

  },

  /*页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /*页面上拉触底事件的处理函数*/
  onReachBottom: function () {

  },

  /*用户点击右上角分享*/
  onShareAppMessage: function () {

  }
})