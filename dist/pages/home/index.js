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
    onLaunch: function onLaunch() {},
    onShow: function onShow() {
        var p = this.selectComponent('.wwe');
        console.log(p);
        p && p.cons();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwibWV0aG9kcyIsIm9uTXlUYXAiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsIm9uTGF1bmNoIiwib25TaG93IiwicCIsInNlbGVjdENvbXBvbmVudCIsImNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1JQSxVQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsSztBQUdMQyxhQUFRLEU7QUFHUkMsVyxtQkFBUUMsQyxFQUFFO0FBQ05DLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQWQ7QUFDSCxLO0FBQ0RDLFksc0JBQVksQ0FFWCxDO0FBQ0RDLFUsb0JBQVU7QUFDTixZQUFJQyxJQUFJLEtBQUtDLGVBQUwsQ0FBcUIsTUFBckIsQ0FBUjtBQUNBTixnQkFBUUMsR0FBUixDQUFZSSxDQUFaO0FBQ0FBLGFBQUdBLEVBQUVFLElBQUYsRUFBSDtBQUNIIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb25maWc6IHtcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWJ1dHRvbic6J2NvbW1vbi9jb21wcy9idXR0b24nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6e1xuXG4gICAgfSxcbiAgICBtZXRob2RzOntcblxuICAgIH0sXG4gICAgb25NeVRhcChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwpXG4gICAgfSxcbiAgICBvbkxhdW5jaCAoKSB7XG5cbiAgICB9LFxuICAgIG9uU2hvdyAoKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5zZWxlY3RDb21wb25lbnQoJy53d2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cocCk7XG4gICAgICAgIHAmJnAuY29ucygpO1xuICAgIH0sXG59Il19