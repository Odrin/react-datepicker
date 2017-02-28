import React from 'react'
import classnames from 'classnames'

const Year = React.createClass({
  displayName: 'Year',

  propTypes: {
    startYear: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    fixedHeight: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired
  },

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.startYear !== this.props.startYear) {
      return true;
    }

    if (nextProps.year !== this.props.year) {
      return true;
    }

    return false;
  },

  render () {
    let rows = [];

    for (let row = 0; row < 3; row++) {
      let years = [];
      let startYear = this.props.startYear + row * 4;

      for (let year = startYear; year < startYear + 4; year++) {
        let className = classnames('react-datepicker__year-item', {
          'react-datepicker__year-item--selected': year === this.props.year
        });
        years.push((
          <div key={`year-${year}`} className={className} onClick={() => this.props.onChange(year)}>{year}</div>
        ));
      }

      rows.push((
        <div key={`row-${row}`} className="react-datepicker__year-row">{years}</div>
      ));
    }

    let className = classnames('react-datepicker__year', {
      'react-datepicker__year--fixed-height': this.props.fixedHeight
    });

    return (
      <div className={className}>
        {rows}
      </div>
    )
  }

});

module.exports = Year;
