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
        var toast1 = this.selectComponent('.toast1');
        //popup1&&popup1.show();
        toast1 && toast1.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwibWV0aG9kcyIsIm9uTXlUYXAiLCJwb3B1cDEiLCJzZWxlY3RDb21wb25lbnQiLCJ0b2FzdDEiLCJzaG93IiwiaGlkZU1vZGFsIiwicCIsImNvbnNvbGUiLCJsb2ciLCJvbkxhdW5jaCIsIm9uU2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBVUlBLFVBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLO0FBR0xDLGFBQVEsRTtBQUdSQyxXLHFCQUFTO0FBQ0wsWUFBSUMsU0FBUyxLQUFLQyxlQUFMLENBQXFCLFNBQXJCLENBQWI7QUFDQSxZQUFJQyxTQUFTLEtBQUtELGVBQUwsQ0FBcUIsU0FBckIsQ0FBYjtBQUNBO0FBQ0FDLGtCQUFRQSxPQUFPQyxJQUFQLEVBQVI7QUFDSCxLO0FBQ0RDLGEscUJBQVVDLEMsRUFBRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0gsSztBQUNERyxZLHNCQUFZLENBRVgsQztBQUNEQyxVLG9CQUFVO0FBQ047OztBQUdIIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb25maWc6IHtcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWJ1dHRvbic6J2NvbW1vbi9jb21wcy9idXR0b24nLFxuICAgICAgICAgICAgJ3d4Yy1tYXNrJzonY29tbW9uL2NvbXBzL21hc2snLFxuICAgICAgICAgICAgJ3d4Yy1wb3B1cCc6J2NvbW1vbi9jb21wcy9wb3B1cCcsXG4gICAgICAgICAgICAnd3hjLWljb24nOidjb21tb24vY29tcHMvaWNvbicsXG4gICAgICAgICAgICAnd3hjLXRvYXN0JzonY29tbW9uL2NvbXBzL3RvYXN0J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOntcblxuICAgIH0sXG4gICAgbWV0aG9kczp7XG5cbiAgICB9LFxuICAgIG9uTXlUYXAoKXtcbiAgICAgICAgbGV0IHBvcHVwMSA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcucG9wdXAxJyk7XG4gICAgICAgIGxldCB0b2FzdDEgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLnRvYXN0MScpO1xuICAgICAgICAvL3BvcHVwMSYmcG9wdXAxLnNob3coKTtcbiAgICAgICAgdG9hc3QxJiZ0b2FzdDEuc2hvdygpO1xuICAgIH0sXG4gICAgaGlkZU1vZGFsKHApe1xuICAgICAgICBjb25zb2xlLmxvZyhwKVxuICAgIH0sXG4gICAgb25MYXVuY2ggKCkge1xuXG4gICAgfSxcbiAgICBvblNob3cgKCkge1xuICAgICAgICAvKmxldCBwID0gdGhpcy5zZWxlY3RDb21wb25lbnQoJy53d2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cocCk7XG4gICAgICAgIHAmJnAuY29ucygpOyovXG4gICAgfSxcbn0iXX0=