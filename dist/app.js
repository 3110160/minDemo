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
    onLaunch: function onLaunch(options) {
        console.log(options);
        this.getUserInfo();
    },
    onShow: function onShow() {},
    onHide: function onHide() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC53eGEiXSwibmFtZXMiOlsiZ2xvYmFsRGF0YSIsImF2YXRhclVybCIsImdldFVzZXJJbmZvIiwidGhhdCIsInd4Iiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJnZW5kZXIiLCJwcm92aW5jZSIsImNpdHkiLCJjb3VudHJ5Iiwib25MYXVuY2giLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZ0JJQSxnQkFBWSxFQUFDQyxXQUFVLEVBQVgsRTs7QUFFWkMsZSx5QkFBYTtBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFHRixXQUFILENBQWU7QUFDWEcscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNuQixvQkFBSUMsV0FBV0QsSUFBSUMsUUFBbkI7QUFDQSxvQkFBSUMsV0FBV0QsU0FBU0MsUUFBeEI7QUFBQSxvQkFDQ1AsWUFBWU0sU0FBU04sU0FEdEI7QUFBQSxvQkFFQ1EsU0FBU0YsU0FBU0UsTUFGbkI7QUFBQSxvQkFFMEI7QUFDekJDLDJCQUFXSCxTQUFTRyxRQUhyQjtBQUFBLG9CQUlDQyxPQUFPSixTQUFTSSxJQUpqQjtBQUFBLG9CQUtDQyxVQUFVTCxTQUFTSyxPQUxwQjtBQU1DVCxxQkFBS0gsVUFBTCxDQUFnQkMsU0FBaEIsR0FBNEJBLFNBQTVCO0FBQ0o7QUFWVSxTQUFmO0FBYUgsSztBQUNEWSxZLG9CQUFVQyxPLEVBQVM7QUFDZkMsZ0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLGFBQUtaLFdBQUw7QUFDSCxLO0FBQ0RlLFUsb0JBQVUsQ0FBRyxDO0FBQ2JDLFUsb0JBQVUsQ0FBRyIsImZpbGUiOiJhcHAud3hhIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZzoge1xuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG5cbiAgICAgIH0sXG4gICAgICBwYWdlczogW10sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmNzIwZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflv6vpuqblsI/nqIvluo/nu4Tku7YnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnIzMzMycsXG4gICAgICB9LFxuICAgICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgICAgcmVxdWVzdDogMTAwMDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGdsb2JhbERhdGE6IHthdmF0YXJVcmw6Jyd9LFxuXG4gICAgZ2V0VXNlckluZm8oKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICAgICAgICAgICAgbGV0IG5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWUsXG4gICAgICAgICAgICAgICAgIGF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgZ2VuZGVyID0gdXNlckluZm8uZ2VuZGVyLC8v5oCn5YirIDDvvJrmnKrnn6XjgIEx77ya55S344CBMu+8muWls1xuICAgICAgICAgICAgICAgICBwcm92aW5jZSA9IHVzZXJJbmZvLnByb3ZpbmNlLFxuICAgICAgICAgICAgICAgICBjaXR5ID0gdXNlckluZm8uY2l0eSxcbiAgICAgICAgICAgICAgICAgY291bnRyeSA9IHVzZXJJbmZvLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS5hdmF0YXJVcmwgPSBhdmF0YXJVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9LFxuICAgIG9uTGF1bmNoIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB9LFxuICAgIG9uU2hvdyAoKSB7IH0sXG4gICAgb25IaWRlICgpIHsgfVxuICB9Il19