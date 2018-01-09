'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Component({
    properties: {
        text: {
            type: String,
            default: '按钮'
        }
    },
    data: {},
    methods: {
        cons: function cons() {
            console.log(3430);
        },
        myTap: function myTap() {
            console.log(33);
            this.triggerEvent('mytap', { p: 2 });
        }
    }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsIm1ldGhvZHMiLCJjb25zIiwiY29uc29sZSIsImxvZyIsIm15VGFwIiwidHJpZ2dlckV2ZW50IiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRVFBLGdCQUFZO0FBQ1JDLGNBQU07QUFDRkMsa0JBQU1DLE1BREo7QUFFRkMscUJBQVM7QUFGUDtBQURFLEs7QUFNWkMsVUFBSyxFO0FBQ0xDLGFBQVE7QUFDSkMsWUFESSxrQkFDRTtBQUNGQyxvQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDSCxTQUhHO0FBSUpDLGFBSkksbUJBSUc7QUFDSEYsb0JBQVFDLEdBQVIsQ0FBWSxFQUFaO0FBQ0EsaUJBQUtFLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMEIsRUFBQ0MsR0FBRSxDQUFILEVBQTFCO0FBQ0g7QUFQRyIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbmZpZzoge30sXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ+aMiemSridcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTp7fSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBjb25zKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMzQzMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBteVRhcCgpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDMzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnbXl0YXAnLHtwOjJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICB9Il19