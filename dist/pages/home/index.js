'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = require('./data');

exports.default = Page({
    data: {
        '__code__': {
            readme: ''
        },

        loader: false,
        bgImage: _data.base64Icon
    },
    methods: {},
    onMyTap: function onMyTap() {
        var popup1 = this.selectComponent('.popup1');
        var toast1 = this.selectComponent('.toast1');
        //popup1&&popup1.show();
        toast1 && toast1.show();
    },
    onSwitch: function onSwitch(e) {
        console.log(e.detail.currentTarget.dataset.key);
    },
    hideModal: function hideModal(p) {
        console.log(p);
    },
    onLaunch: function onLaunch() {},
    onShow: function onShow() {
        /*let p = this.selectComponent('.wwe');
        console.log(p);
        p&&p.cons();*/
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwibG9hZGVyIiwiYmdJbWFnZSIsIm1ldGhvZHMiLCJvbk15VGFwIiwicG9wdXAxIiwic2VsZWN0Q29tcG9uZW50IiwidG9hc3QxIiwic2hvdyIsIm9uU3dpdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImtleSIsImhpZGVNb2RhbCIsInAiLCJvbkxhdW5jaCIsIm9uU2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQWFJQSxVQUFLO0FBQUE7QUFBQTtBQUFBOztBQUNEQyxnQkFBTyxLQUROO0FBRURDO0FBRkMsSztBQUlMQyxhQUFRLEU7QUFHUkMsVyxxQkFBUztBQUNMLFlBQUlDLFNBQVMsS0FBS0MsZUFBTCxDQUFxQixTQUFyQixDQUFiO0FBQ0EsWUFBSUMsU0FBUyxLQUFLRCxlQUFMLENBQXFCLFNBQXJCLENBQWI7QUFDQTtBQUNBQyxrQkFBUUEsT0FBT0MsSUFBUCxFQUFSO0FBQ0gsSztBQUNEQyxZLG9CQUFTQyxDLEVBQUU7QUFDUEMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBRixDQUFTQyxhQUFULENBQXVCQyxPQUF2QixDQUErQkMsR0FBM0M7QUFDSCxLO0FBQ0RDLGEscUJBQVVDLEMsRUFBRTtBQUNSUCxnQkFBUUMsR0FBUixDQUFZTSxDQUFaO0FBQ0gsSztBQUNEQyxZLHNCQUFZLENBRVgsQztBQUNEQyxVLG9CQUFVO0FBQ047OztBQUdIIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmFzZTY0SWNvbn0gZnJvbSAnLi9kYXRhLmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZzoge1xuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd3eGMtYnV0dG9uJzonY29tbW9uL2NvbXBzL2J1dHRvbicsXG4gICAgICAgICAgICAnd3hjLW1hc2snOidjb21tb24vY29tcHMvbWFzaycsXG4gICAgICAgICAgICAnd3hjLXBvcHVwJzonY29tbW9uL2NvbXBzL3BvcHVwJyxcbiAgICAgICAgICAgICd3eGMtaWNvbic6J2NvbW1vbi9jb21wcy9pY29uJyxcbiAgICAgICAgICAgICd3eGMtdG9hc3QnOidjb21tb24vY29tcHMvdG9hc3QnLFxuICAgICAgICAgICAgJ3d4Yy1sb2FkaW5nJzonY29tbW9uL2NvbXBzL2xvYWRpbmcnLFxuICAgICAgICAgICAgJ3d4Yy10YWInOidjb21tb24vY29tcHMvdGFiJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YTp7XG4gICAgICAgIGxvYWRlcjpmYWxzZSxcbiAgICAgICAgYmdJbWFnZTpiYXNlNjRJY29uXG4gICAgfSxcbiAgICBtZXRob2RzOntcblxuICAgIH0sXG4gICAgb25NeVRhcCgpe1xuICAgICAgICBsZXQgcG9wdXAxID0gdGhpcy5zZWxlY3RDb21wb25lbnQoJy5wb3B1cDEnKTtcbiAgICAgICAgbGV0IHRvYXN0MSA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcudG9hc3QxJyk7XG4gICAgICAgIC8vcG9wdXAxJiZwb3B1cDEuc2hvdygpO1xuICAgICAgICB0b2FzdDEmJnRvYXN0MS5zaG93KCk7XG4gICAgfSxcbiAgICBvblN3aXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleSlcbiAgICB9LFxuICAgIGhpZGVNb2RhbChwKXtcbiAgICAgICAgY29uc29sZS5sb2cocClcbiAgICB9LFxuICAgIG9uTGF1bmNoICgpIHtcblxuICAgIH0sXG4gICAgb25TaG93ICgpIHtcbiAgICAgICAgLypsZXQgcCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcud3dlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHApO1xuICAgICAgICBwJiZwLmNvbnMoKTsqL1xuICAgIH0sXG59Il19