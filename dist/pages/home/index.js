'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _base = require('../../utils/base64.js');

var _menu = require('./menu.js');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = getApp();
exports.default = Page({
    data: {
        '__code__': {
            readme: ''
        },

        avatarUrl: _base.logo,
        list: _menu2.default
    },
    showContent: function showContent(e) {
        var index = e.target.dataset.index,
            opened = e.target.dataset.opened,
            list = this.data.list;
        list[index].opened = !opened;
        this.setData({
            list: list
        });
    },

    //生命周期函数--监听页面加载
    onLoad: function onLoad() {},

    //生命周期函数--监听页面初次渲染完成
    onReady: function onReady() {},

    //生命周期函数--监听页面显示
    onShow: function onShow() {},

    //生命周期函数--监听页面隐藏
    onHide: function onHide() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJhcHAiLCJnZXRBcHAiLCJkYXRhIiwiYXZhdGFyVXJsIiwibGlzdCIsInNob3dDb250ZW50IiwiZSIsImluZGV4IiwidGFyZ2V0IiwiZGF0YXNldCIsIm9wZW5lZCIsInNldERhdGEiLCJvbkxvYWQiLCJvblJlYWR5Iiwib25TaG93Iiwib25IaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDRTs7QUFDQTs7Ozs7O0FBRkYsSUFBTUEsTUFBTUMsUUFBWjs7QUFVSUMsVUFBSztBQUFBO0FBQUE7QUFBQTs7QUFDREMsNkJBREM7QUFFREM7QUFGQyxLO0FBSUxDLGUsdUJBQVlDLEMsRUFBRTtBQUNWLFlBQUlDLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkYsS0FBN0I7QUFBQSxZQUNJRyxTQUFTSixFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLE1BRDlCO0FBQUEsWUFFSU4sT0FBTyxLQUFLRixJQUFMLENBQVVFLElBRnJCO0FBR0FBLGFBQUtHLEtBQUwsRUFBWUcsTUFBWixHQUFxQixDQUFDQSxNQUF0QjtBQUNBLGFBQUtDLE9BQUwsQ0FBYTtBQUNUUCxrQkFBS0E7QUFESSxTQUFiO0FBR0gsSzs7QUFDRDtBQUNBUSxVLG9CQUFVLENBQ1QsQzs7QUFDRDtBQUNBQyxXLHFCQUFTLENBRVIsQzs7QUFDRDtBQUNBQyxVLG9CQUFVLENBQ1QsQzs7QUFDRDtBQUNBQyxVLG9CQUFRLENBRVAiLCJmaWxlIjoiaW5kZXgud3hwIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwKCk7XG4gIGltcG9ydCB7bG9nb30gZnJvbSAnLi4vLi4vdXRpbHMvYmFzZTY0J1xuICBpbXBvcnQgbGlzdCBmcm9tICcuL21lbnUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29uZmlnOiB7XG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1hdmF0YXInOidjb21tb24vY29tcHMvYXZhdGFyJyxcbiAgICAgICAgICAgICd3eGMtaWNvbic6J2NvbW1vbi9jb21wcy9pY29uJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOntcbiAgICAgICAgYXZhdGFyVXJsOmxvZ28sXG4gICAgICAgIGxpc3Q6bGlzdFxuICAgIH0sXG4gICAgc2hvd0NvbnRlbnQoZSl7XG4gICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgsXG4gICAgICAgICAgICBvcGVuZWQgPSBlLnRhcmdldC5kYXRhc2V0Lm9wZW5lZCxcbiAgICAgICAgICAgIGxpc3QgPSB0aGlzLmRhdGEubGlzdDtcbiAgICAgICAgbGlzdFtpbmRleF0ub3BlbmVkID0gIW9wZW5lZDtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGxpc3Q6bGlzdFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy/nlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgIG9uTG9hZCAoKSB7XG4gICAgfSxcbiAgICAvL+eUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAgb25SZWFkeSgpe1xuXG4gICAgfSxcbiAgICAvL+eUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAgb25TaG93ICgpIHtcbiAgICB9LFxuICAgIC8v55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICBvbkhpZGUoKXtcblxuICAgIH1cbn0iXX0=