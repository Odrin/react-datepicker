'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Year = function (_React$Component) {
  _inherits(Year, _React$Component);

  function Year() {
    _classCallCheck(this, Year);

    return _possibleConstructorReturn(this, (Year.__proto__ || Object.getPrototypeOf(Year)).apply(this, arguments));
  }

  _createClass(Year, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.startYear !== this.props.startYear) {
        return true;
      }

      if (nextProps.year !== this.props.year) {
        return true;
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rows = [];

      for (var row = 0; row < 3; row++) {
        var years = [];
        var startYear = this.props.startYear + row * 4;

        var _loop = function _loop(year) {
          var className = (0, _classnames2.default)('react-datepicker__year-item', {
            'react-datepicker__year-item--selected': year === _this2.props.year
          });
          years.push(_react2.default.createElement(
            'div',
            { key: 'year-' + year, className: className, onClick: function onClick() {
                return _this2.props.onChange(year);
              } },
            year
          ));
        };

        for (var year = startYear; year < startYear + 4; year++) {
          _loop(year);
        }

        rows.push(_react2.default.createElement(
          'div',
          { key: 'row-' + row, className: 'react-datepicker__year-row' },
          years
        ));
      }

      var className = (0, _classnames2.default)('react-datepicker__year', {
        'react-datepicker__year--fixed-height': this.props.fixedHeight
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        rows
      );
    }
  }]);

  return Year;
}(_react2.default.Component);

Year.propTypes = {
  startYear: _propTypes2.default.number.isRequired,
  year: _propTypes2.default.number.isRequired,
  fixedHeight: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired
};
exports.default = Year;
