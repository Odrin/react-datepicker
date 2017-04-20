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

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.tabs !== this.props.tabs) {
        return true;
      }

      if (nextProps.tab !== this.props.tab) {
        return true;
      }

      return false;
    }
  }, {
    key: 'onChange',
    value: function onChange(tab) {
      this.props.onChange(tab);
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this2 = this;

      return this.props.tabs.map(function (tab, index, array) {
        return _react2.default.createElement(
          'div',
          { key: tab.id,
            style: { width: 100 / array.length + '%' },
            className: (0, _classnames2.default)('react-datepicker__tab', { 'react-datepicker__tab--active': tab.id === _this2.props.tab.id }),
            onClick: function onClick(e) {
              return _this2.onChange(tab);
            } },
          _react2.default.createElement(
            'span',
            { className: 'react-datepicker__tab-title' },
            tab.title
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-datepicker__tabs-container' },
        this.renderTabs()
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    title: _propTypes2.default.string
  }).isRequired).isRequired,
  tab: _propTypes2.default.shape({
    id: _propTypes2.default.number,
    title: _propTypes2.default.string
  }).isRequired,
  onChange: _propTypes2.default.func.isRequired
};
exports.default = Tabs;
