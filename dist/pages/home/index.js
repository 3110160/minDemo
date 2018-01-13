'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        '__code__': {
            readme: ''
        }
    },
    methods: {},
    onMyTap: function onMyTap() {
        var popup1 = this.selectComponent('.popup1');
        console.log(popup1);
        popup1 && popup1.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwibWV0aG9kcyIsIm9uTXlUYXAiLCJwb3B1cDEiLCJzZWxlY3RDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsImhpZGVNb2RhbCIsInAiLCJvbkxhdW5jaCIsIm9uU2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0lBLFVBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLO0FBR0xDLGFBQVEsRTtBQUdSQyxXLHFCQUFTO0FBQ0wsWUFBSUMsU0FBUyxLQUFLQyxlQUFMLENBQXFCLFNBQXJCLENBQWI7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBQSxrQkFBUUEsT0FBT0ksSUFBUCxFQUFSO0FBQ0gsSztBQUNEQyxhLHFCQUFVQyxDLEVBQUU7QUFDUkosZ0JBQVFDLEdBQVIsQ0FBWUcsQ0FBWjtBQUNILEs7QUFDREMsWSxzQkFBWSxDQUVYLEM7QUFDREMsVSxvQkFBVTtBQUNOOzs7QUFHSCIsImZpbGUiOiJpbmRleC53eHAiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgY29uZmlnOiB7XG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1idXR0b24nOidjb21tb24vY29tcHMvYnV0dG9uJyxcbiAgICAgICAgICAgICd3eGMtbWFzayc6J2NvbW1vbi9jb21wcy9tYXNrJyxcbiAgICAgICAgICAgICd3eGMtcG9wdXAnOidjb21tb24vY29tcHMvcG9wdXAnLFxuICAgICAgICAgICAgJ3d4Yy1pY29uJzonY29tbW9uL2NvbXBzL2ljb24nLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOntcblxuICAgIH0sXG4gICAgbWV0aG9kczp7XG5cbiAgICB9LFxuICAgIG9uTXlUYXAoKXtcbiAgICAgICAgbGV0IHBvcHVwMSA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcucG9wdXAxJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvcHVwMSk7XG4gICAgICAgIHBvcHVwMSYmcG9wdXAxLnNob3coKTtcbiAgICB9LFxuICAgIGhpZGVNb2RhbChwKXtcbiAgICAgICAgY29uc29sZS5sb2cocClcbiAgICB9LFxuICAgIG9uTGF1bmNoICgpIHtcblxuICAgIH0sXG4gICAgb25TaG93ICgpIHtcbiAgICAgICAgLypsZXQgcCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcud3dlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHApO1xuICAgICAgICBwJiZwLmNvbnMoKTsqL1xuICAgIH0sXG59Il19