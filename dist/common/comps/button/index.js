'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Component({
    properties: {
        text: {
            type: String,
            value: '按钮'
        },
        bgColor: {
            type: String,
            value: ''
        },
        loading: {
            type: Boolean,
            value: false
        },
        width: {
            type: String,
            value: ''
        },
        type: {
            type: String,
            value: 'default',
            observer: function observer(type) {
                var currentType = null;
                switch (type) {
                    case 'primary':
                        currentType = 'primary';
                        break;
                    case 'warn':
                        currentType = 'warn';
                        break;
                    case 'danger':
                        currentType = 'danger';
                        break;
                    default:
                        currentType = 'default';
                }
                this.setData({ currentType: currentType });
            }
        },
        size: {
            type: String,
            value: 'default',
            observer: function observer(type) {
                var currentSize = null;
                switch (type) {
                    case 'small':
                        currentSize = 'small';
                        break;
                    case 'mini':
                        currentSize = 'mini';
                        break;
                    case 'large':
                        currentSize = 'large';
                        break;
                    default:
                        currentSize = 'default';
                }
                this.setData({ currentSize: currentSize });
            }
        }
    },
    data: {
        currentType: '',
        currentSize: ''
    },
    methods: {
        myTap: function myTap(e) {
            console.log(33);
            this.triggerEvent('mytap', e);
        }
    }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImJnQ29sb3IiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIndpZHRoIiwib2JzZXJ2ZXIiLCJjdXJyZW50VHlwZSIsInNldERhdGEiLCJzaXplIiwiY3VycmVudFNpemUiLCJkYXRhIiwibWV0aG9kcyIsIm15VGFwIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVRQSxnQkFBWTtBQUNSQyxjQUFNO0FBQ0ZDLGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FERTtBQUtSQyxpQkFBUTtBQUNKSCxrQkFBS0MsTUFERDtBQUVKQyxtQkFBTTtBQUZGLFNBTEE7QUFTUkUsaUJBQVE7QUFDTkosa0JBQUtLLE9BREM7QUFFTkgsbUJBQU07QUFGQSxTQVRBO0FBYVJJLGVBQU07QUFDRk4sa0JBQUtDLE1BREg7QUFFRkMsbUJBQU07QUFGSixTQWJFO0FBaUJSRixjQUFLO0FBQ0RBLGtCQUFLQyxNQURKO0FBRURDLG1CQUFNLFNBRkw7QUFHREssb0JBSEMsb0JBR1FQLElBSFIsRUFHYTtBQUNWLG9CQUFJUSxjQUFhLElBQWpCO0FBQ0Esd0JBQVFSLElBQVI7QUFDSSx5QkFBSyxTQUFMO0FBQ0lRLHNDQUFjLFNBQWQ7QUFDSjtBQUNBLHlCQUFLLE1BQUw7QUFDSUEsc0NBQWMsTUFBZDtBQUNBO0FBQ0oseUJBQUssUUFBTDtBQUNJQSxzQ0FBYyxRQUFkO0FBQ0E7QUFDSjtBQUNJQSxzQ0FBYyxTQUFkO0FBWFI7QUFhQSxxQkFBS0MsT0FBTCxDQUFhLEVBQUNELGFBQVlBLFdBQWIsRUFBYjtBQUNIO0FBbkJBLFNBakJHO0FBc0NSRSxjQUFLO0FBQ0RWLGtCQUFLQyxNQURKO0FBRURDLG1CQUFNLFNBRkw7QUFHREssb0JBSEMsb0JBR1FQLElBSFIsRUFHYTtBQUNWLG9CQUFJVyxjQUFhLElBQWpCO0FBQ0Esd0JBQVFYLElBQVI7QUFDSSx5QkFBSyxPQUFMO0FBQ0lXLHNDQUFjLE9BQWQ7QUFDQTtBQUNKLHlCQUFLLE1BQUw7QUFDSUEsc0NBQWMsTUFBZDtBQUNBO0FBQ0oseUJBQUssT0FBTDtBQUNJQSxzQ0FBYyxPQUFkO0FBQ0E7QUFDSjtBQUNJQSxzQ0FBYyxTQUFkO0FBWFI7QUFhQSxxQkFBS0YsT0FBTCxDQUFhLEVBQUNFLGFBQVlBLFdBQWIsRUFBYjtBQUNIO0FBbkJBO0FBdENHLEs7QUE0RFpDLFVBQUs7QUFDREoscUJBQVksRUFEWDtBQUVERyxxQkFBWTtBQUZYLEs7QUFJTEUsYUFBUTtBQUNKQyxhQURJLGlCQUNFQyxDQURGLEVBQ0k7QUFDSkMsb0JBQVFDLEdBQVIsQ0FBWSxFQUFaO0FBQ0EsaUJBQUtDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMEJILENBQTFCO0FBQ0g7QUFKRyIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbmZpZzoge30sXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICfmjInpkq4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmdDb2xvcjp7XG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgICAgICAgICAgdmFsdWU6JydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOntcbiAgICAgICAgICAgICAgdHlwZTpCb29sZWFuLFxuICAgICAgICAgICAgICB2YWx1ZTpmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOntcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZTonJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6e1xuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgICAgICAgIHZhbHVlOidkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcih0eXBlKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUeXBlID1udWxsO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFR5cGUgPSAncHJpbWFyeSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlID0gJ3dhcm4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZSA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7Y3VycmVudFR5cGU6Y3VycmVudFR5cGV9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplOntcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZTonZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIodHlwZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2l6ZSA9bnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW5pJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9ICdtaW5pJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaXplID0gJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtjdXJyZW50U2l6ZTpjdXJyZW50U2l6ZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOntcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlOicnLFxuICAgICAgICAgICAgY3VycmVudFNpemU6JydcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBteVRhcChlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygzMyk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ215dGFwJyxlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICB9Il19