'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = App({
    globalData: { avatarUrl: '' },

    getUserInfo: function getUserInfo() {
        var that = this;
        wx.getUserInfo({
            success: function success(res) {
                var userInfo = res.userInfo;
                var nickName = userInfo.nickName,
                    avatarUrl = userInfo.avatarUrl,
                    gender = userInfo.gender,
                    //性别 0：未知、1：男、2：女
                province = userInfo.province,
                    city = userInfo.city,
                    country = userInfo.country;
                that.globalData.avatarUrl = avatarUrl;
            }
        });
    },
    onLaunch: function onLaunch() {
        this.getUserInfo();
    },
    onShow: function onShow() {},
    onHide: function onHide() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC53eGEiXSwibmFtZXMiOlsiZ2xvYmFsRGF0YSIsImF2YXRhclVybCIsImdldFVzZXJJbmZvIiwidGhhdCIsInd4Iiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJnZW5kZXIiLCJwcm92aW5jZSIsImNpdHkiLCJjb3VudHJ5Iiwib25MYXVuY2giLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWlCSUEsZ0JBQVksRUFBQ0MsV0FBVSxFQUFYLEU7O0FBRVpDLGUseUJBQWE7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0YsV0FBSCxDQUFlO0FBQ1hHLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDbkIsb0JBQUlDLFdBQVdELElBQUlDLFFBQW5CO0FBQ0Esb0JBQUlDLFdBQVdELFNBQVNDLFFBQXhCO0FBQUEsb0JBQ0NQLFlBQVlNLFNBQVNOLFNBRHRCO0FBQUEsb0JBRUNRLFNBQVNGLFNBQVNFLE1BRm5CO0FBQUEsb0JBRTBCO0FBQ3pCQywyQkFBV0gsU0FBU0csUUFIckI7QUFBQSxvQkFJQ0MsT0FBT0osU0FBU0ksSUFKakI7QUFBQSxvQkFLQ0MsVUFBVUwsU0FBU0ssT0FMcEI7QUFNQ1QscUJBQUtILFVBQUwsQ0FBZ0JDLFNBQWhCLEdBQTRCQSxTQUE1QjtBQUNKO0FBVlUsU0FBZjtBQWFILEs7QUFDRFksWSxzQkFBWTtBQUNSLGFBQUtYLFdBQUw7QUFDSCxLO0FBQ0RZLFUsb0JBQVUsQ0FBRyxDO0FBQ2JDLFUsb0JBQVUsQ0FBRyIsImZpbGUiOiJhcHAud3hhIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZzoge1xuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG5cbiAgICAgIH0sXG4gICAgICBwYWdlczogW10sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWZlZmVmJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZjcyMGYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5b+r6bqm5bCP56iL5bqP57uE5Lu2JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyMzMzMnLFxuICAgICAgfSxcbiAgICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICAgIHJlcXVlc3Q6IDEwMDAwXG4gICAgICB9XG4gICAgfSxcbiAgICBnbG9iYWxEYXRhOiB7YXZhdGFyVXJsOicnfSxcblxuICAgIGdldFVzZXJJbmZvKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIGxldCBuaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgIGdlbmRlciA9IHVzZXJJbmZvLmdlbmRlciwvL+aAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcbiAgICAgICAgICAgICAgICAgcHJvdmluY2UgPSB1c2VySW5mby5wcm92aW5jZSxcbiAgICAgICAgICAgICAgICAgY2l0eSA9IHVzZXJJbmZvLmNpdHksXG4gICAgICAgICAgICAgICAgIGNvdW50cnkgPSB1c2VySW5mby5jb3VudHJ5O1xuICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEuYXZhdGFyVXJsID0gYXZhdGFyVXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSxcbiAgICBvbkxhdW5jaCAoKSB7XG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB9LFxuICAgIG9uU2hvdyAoKSB7IH0sXG4gICAgb25IaWRlICgpIHsgfVxuICB9Il19