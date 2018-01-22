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
        var dialog = this.selectComponent('.dialog');
        var toast1 = this.selectComponent('.toast1');
        //popup1&&popup1.show();
        dialog && dialog.show();
        //toast1&&toast1.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwibG9hZGVyIiwiYmdJbWFnZSIsIm1ldGhvZHMiLCJvbk15VGFwIiwicG9wdXAxIiwic2VsZWN0Q29tcG9uZW50IiwiZGlhbG9nIiwidG9hc3QxIiwic2hvdyIsIm9uU3dpdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImtleSIsImhpZGVNb2RhbCIsInAiLCJvbkxhdW5jaCIsIm9uU2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQWdCSUEsVUFBSztBQUFBO0FBQUE7QUFBQTs7QUFDREMsZ0JBQU8sS0FETjtBQUVEQztBQUZDLEs7QUFJTEMsYUFBUSxFO0FBR1JDLFcscUJBQVM7QUFDTCxZQUFJQyxTQUFTLEtBQUtDLGVBQUwsQ0FBcUIsU0FBckIsQ0FBYjtBQUNBLFlBQUlDLFNBQVMsS0FBS0QsZUFBTCxDQUFxQixTQUFyQixDQUFiO0FBQ0EsWUFBSUUsU0FBUyxLQUFLRixlQUFMLENBQXFCLFNBQXJCLENBQWI7QUFDQTtBQUNBQyxrQkFBUUEsT0FBT0UsSUFBUCxFQUFSO0FBQ0E7QUFDSCxLO0FBQ0RDLFksb0JBQVNDLEMsRUFBRTtBQUNQQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFGLENBQVNDLGFBQVQsQ0FBdUJDLE9BQXZCLENBQStCQyxHQUEzQztBQUNILEs7QUFDREMsYSxxQkFBVUMsQyxFQUFFO0FBQ1JQLGdCQUFRQyxHQUFSLENBQVlNLENBQVo7QUFDSCxLO0FBQ0RDLFksc0JBQVksQ0FFWCxDO0FBQ0RDLFUsb0JBQVU7QUFDTjs7O0FBR0giLCJmaWxlIjoiaW5kZXgud3hwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiYXNlNjRJY29ufSBmcm9tICcuL2RhdGEuanMnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29uZmlnOiB7XG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1idXR0b24nOidjb21tb24vY29tcHMvYnV0dG9uJyxcbiAgICAgICAgICAgICd3eGMtbWFzayc6J2NvbW1vbi9jb21wcy9tYXNrJyxcbiAgICAgICAgICAgICd3eGMtcG9wdXAnOidjb21tb24vY29tcHMvcG9wdXAnLFxuICAgICAgICAgICAgJ3d4Yy1pY29uJzonY29tbW9uL2NvbXBzL2ljb24nLFxuICAgICAgICAgICAgJ3d4Yy10b2FzdCc6J2NvbW1vbi9jb21wcy90b2FzdCcsXG4gICAgICAgICAgICAnd3hjLWxvYWRpbmcnOidjb21tb24vY29tcHMvbG9hZGluZycsXG4gICAgICAgICAgICAnd3hjLXRhYic6J2NvbW1vbi9jb21wcy90YWInLFxuICAgICAgICAgICAgJ3d4Yy1lbGlwJzonY29tbW9uL2NvbXBzL2VsaXAnLFxuICAgICAgICAgICAgJ3d4Yy1sb2FkbW9yZSc6J2NvbW1vbi9jb21wcy9sb2FkbW9yZScsXG4gICAgICAgICAgICAnd3hjLWRpYWxvZyc6J2NvbW1vbi9jb21wcy9kaWFsb2cnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOntcbiAgICAgICAgbG9hZGVyOmZhbHNlLFxuICAgICAgICBiZ0ltYWdlOmJhc2U2NEljb25cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuXG4gICAgfSxcbiAgICBvbk15VGFwKCl7XG4gICAgICAgIGxldCBwb3B1cDEgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLnBvcHVwMScpO1xuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5zZWxlY3RDb21wb25lbnQoJy5kaWFsb2cnKTtcbiAgICAgICAgbGV0IHRvYXN0MSA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcudG9hc3QxJyk7XG4gICAgICAgIC8vcG9wdXAxJiZwb3B1cDEuc2hvdygpO1xuICAgICAgICBkaWFsb2cmJmRpYWxvZy5zaG93KCk7XG4gICAgICAgIC8vdG9hc3QxJiZ0b2FzdDEuc2hvdygpO1xuICAgIH0sXG4gICAgb25Td2l0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXkpXG4gICAgfSxcbiAgICBoaWRlTW9kYWwocCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHApXG4gICAgfSxcbiAgICBvbkxhdW5jaCAoKSB7XG5cbiAgICB9LFxuICAgIG9uU2hvdyAoKSB7XG4gICAgICAgIC8qbGV0IHAgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLnd3ZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhwKTtcbiAgICAgICAgcCYmcC5jb25zKCk7Ki9cbiAgICB9LFxufSJdfQ==