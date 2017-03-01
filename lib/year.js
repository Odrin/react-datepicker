'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Year = _react2.default.createClass({
  displayName: 'Year',

  propTypes: {
    startYear: _react2.default.PropTypes.number.isRequired,
    year: _react2.default.PropTypes.number.isRequired,
    fixedHeight: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func.isRequired
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.startYear !== this.props.startYear) {
      return true;
    }

    if (nextProps.year !== this.props.year) {
      return true;
    }

    return false;
  },
  render: function render() {
    var _this = this;

    var rows = [];

    for (var row = 0; row < 3; row++) {
      var years = [];
      var startYear = this.props.startYear + row * 4;

      var _loop = function _loop(year) {
        var className = (0, _classnames2.default)('react-datepicker__year-item', {
          'react-datepicker__year-item--selected': year === _this.props.year
        });
        years.push(_react2.default.createElement(
          'div',
          { key: 'year-' + year, className: className, onClick: function onClick() {
              return _this.props.onChange(year);
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
});

module.exports = Year;
