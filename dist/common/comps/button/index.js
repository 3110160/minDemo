'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Component({
    properties: {
        text: {
            type: String,
            value: ''
        },
        bgColor: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
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
            if (this.data.loading) return false;
            this.triggerEvent('mytap', e);
        }
    }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImJnQ29sb3IiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwid2lkdGgiLCJvYnNlcnZlciIsImN1cnJlbnRUeXBlIiwic2V0RGF0YSIsInNpemUiLCJjdXJyZW50U2l6ZSIsImRhdGEiLCJtZXRob2RzIiwibXlUYXAiLCJlIiwidHJpZ2dlckV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFUUEsZ0JBQVk7QUFDUkMsY0FBTTtBQUNGQyxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBREU7QUFLUkMsaUJBQVE7QUFDSkgsa0JBQUtDLE1BREQ7QUFFSkMsbUJBQU07QUFGRixTQUxBO0FBU1JFLGtCQUFTO0FBQ0xKLGtCQUFLSyxPQURBO0FBRUxILG1CQUFNO0FBRkQsU0FURDtBQWFSSSxpQkFBUTtBQUNOTixrQkFBS0ssT0FEQztBQUVOSCxtQkFBTTtBQUZBLFNBYkE7QUFpQlJLLGVBQU07QUFDRlAsa0JBQUtDLE1BREg7QUFFRkMsbUJBQU07QUFGSixTQWpCRTtBQXFCUkYsY0FBSztBQUNEQSxrQkFBS0MsTUFESjtBQUVEQyxtQkFBTSxTQUZMO0FBR0RNLG9CQUhDLG9CQUdRUixJQUhSLEVBR2E7QUFDVixvQkFBSVMsY0FBYSxJQUFqQjtBQUNBLHdCQUFRVCxJQUFSO0FBQ0kseUJBQUssU0FBTDtBQUNJUyxzQ0FBYyxTQUFkO0FBQ0o7QUFDQSx5QkFBSyxNQUFMO0FBQ0lBLHNDQUFjLE1BQWQ7QUFDQTtBQUNKLHlCQUFLLFFBQUw7QUFDSUEsc0NBQWMsUUFBZDtBQUNBO0FBQ0o7QUFDSUEsc0NBQWMsU0FBZDtBQVhSO0FBYUEscUJBQUtDLE9BQUwsQ0FBYSxFQUFDRCxhQUFZQSxXQUFiLEVBQWI7QUFDSDtBQW5CQSxTQXJCRztBQTBDUkUsY0FBSztBQUNEWCxrQkFBS0MsTUFESjtBQUVEQyxtQkFBTSxTQUZMO0FBR0RNLG9CQUhDLG9CQUdRUixJQUhSLEVBR2E7QUFDVixvQkFBSVksY0FBYSxJQUFqQjtBQUNBLHdCQUFRWixJQUFSO0FBQ0kseUJBQUssT0FBTDtBQUNJWSxzQ0FBYyxPQUFkO0FBQ0E7QUFDSix5QkFBSyxNQUFMO0FBQ0lBLHNDQUFjLE1BQWQ7QUFDQTtBQUNKLHlCQUFLLE9BQUw7QUFDSUEsc0NBQWMsT0FBZDtBQUNBO0FBQ0o7QUFDSUEsc0NBQWMsU0FBZDtBQVhSO0FBYUEscUJBQUtGLE9BQUwsQ0FBYSxFQUFDRSxhQUFZQSxXQUFiLEVBQWI7QUFDSDtBQW5CQTtBQTFDRyxLO0FBZ0VaQyxVQUFLO0FBQ0RKLHFCQUFZLEVBRFg7QUFFREcscUJBQVk7QUFGWCxLO0FBSUxFLGFBQVE7QUFDSkMsYUFESSxpQkFDRUMsQ0FERixFQUNJO0FBQ0osZ0JBQUcsS0FBS0gsSUFBTCxDQUFVUCxPQUFiLEVBQXNCLE9BQU8sS0FBUDtBQUN0QixpQkFBS1csWUFBTCxDQUFrQixPQUFsQixFQUEwQkQsQ0FBMUI7QUFDSDtBQUpHIiwiZmlsZSI6ImluZGV4Lnd4YyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZ0NvbG9yOntcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZTonJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOntcbiAgICAgICAgICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgICAgICAgICAgdmFsdWU6ZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkaW5nOntcbiAgICAgICAgICAgICAgdHlwZTpCb29sZWFuLFxuICAgICAgICAgICAgICB2YWx1ZTpmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOntcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZTonJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6e1xuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgICAgICAgIHZhbHVlOidkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcih0eXBlKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUeXBlID1udWxsO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFR5cGUgPSAncHJpbWFyeSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUeXBlID0gJ3dhcm4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZSA9ICdkYW5nZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHlwZSA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7Y3VycmVudFR5cGU6Y3VycmVudFR5cGV9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplOntcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZTonZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIodHlwZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2l6ZSA9bnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9ICdzbWFsbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW5pJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9ICdtaW5pJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaXplID0gJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtjdXJyZW50U2l6ZTpjdXJyZW50U2l6ZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOntcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlOicnLFxuICAgICAgICAgICAgY3VycmVudFNpemU6JydcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBteVRhcChlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEubG9hZGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdteXRhcCcsZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXG4gICAgfSJdfQ==