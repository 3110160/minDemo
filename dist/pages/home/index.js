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
    onMyTap: function onMyTap(e) {
        console.log(e.detail);
    },
    hideModal: function hideModal(p) {
        console.log(p);
    },
    onLaunch: function onLaunch() {},
    onShow: function onShow() {
        var p = this.selectComponent('.wwe');
        console.log(p);
        p && p.cons();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwibWV0aG9kcyIsIm9uTXlUYXAiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImhpZGVNb2RhbCIsInAiLCJvbkxhdW5jaCIsIm9uU2hvdyIsInNlbGVjdENvbXBvbmVudCIsImNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9JQSxVQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsSztBQUdMQyxhQUFRLEU7QUFHUkMsVyxtQkFBUUMsQyxFQUFFO0FBQ05DLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQWQ7QUFDSCxLO0FBQ0RDLGEscUJBQVVDLEMsRUFBRTtBQUNSSixnQkFBUUMsR0FBUixDQUFZRyxDQUFaO0FBQ0gsSztBQUNEQyxZLHNCQUFZLENBRVgsQztBQUNEQyxVLG9CQUFVO0FBQ04sWUFBSUYsSUFBSSxLQUFLRyxlQUFMLENBQXFCLE1BQXJCLENBQVI7QUFDQVAsZ0JBQVFDLEdBQVIsQ0FBWUcsQ0FBWjtBQUNBQSxhQUFHQSxFQUFFSSxJQUFGLEVBQUg7QUFDSCIsImZpbGUiOiJpbmRleC53eHAiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgY29uZmlnOiB7XG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3d4Yy1idXR0b24nOidjb21tb24vY29tcHMvYnV0dG9uJyxcbiAgICAgICAgICAgICd3eGMtbWFzayc6J2NvbW1vbi9jb21wcy9tYXNrJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOntcblxuICAgIH0sXG4gICAgbWV0aG9kczp7XG5cbiAgICB9LFxuICAgIG9uTXlUYXAoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxuICAgIH0sXG4gICAgaGlkZU1vZGFsKHApe1xuICAgICAgICBjb25zb2xlLmxvZyhwKVxuICAgIH0sXG4gICAgb25MYXVuY2ggKCkge1xuXG4gICAgfSxcbiAgICBvblNob3cgKCkge1xuICAgICAgICBsZXQgcCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcud3dlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHApO1xuICAgICAgICBwJiZwLmNvbnMoKTtcbiAgICB9LFxufSJdfQ==