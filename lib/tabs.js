'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = _react2.default.createClass({
  displayName: 'Tabs',

  propTypes: {
    tabs: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
      id: _react2.default.PropTypes.number,
      title: _react2.default.PropTypes.string
    }).isRequired).isRequired,
    tab: _react2.default.PropTypes.shape({
      id: _react2.default.PropTypes.number,
      title: _react2.default.PropTypes.string
    }).isRequired,
    onChange: _react2.default.PropTypes.func.isRequired
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tabs !== this.props.tabs) {
      return true;
    }

    if (nextProps.tab !== this.props.tab) {
      return true;
    }

    return false;
  },
  onChange: function onChange(tab) {
    this.props.onChange(tab);
  },
  renderTabs: function renderTabs() {
    var _this = this;

    return this.props.tabs.map(function (tab, index, array) {
      return _react2.default.createElement(
        'div',
        { key: tab.id,
          style: { width: 100 / array.length + '%' },
          className: (0, _classnames2.default)('react-datepicker__tab', { 'react-datepicker__tab--active': tab.id === _this.props.tab.id }),
          onClick: function onClick(e) {
            return _this.onChange(tab);
          } },
        _react2.default.createElement(
          'span',
          { className: 'react-datepicker__tab-title' },
          tab.title
        )
      );
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'react-datepicker__tabs-container' },
      this.renderTabs()
    );
  }
});

module.exports = Tabs;
