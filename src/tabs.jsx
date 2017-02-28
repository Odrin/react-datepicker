import React from 'react'
import classnames from 'classnames'

var Tabs = React.createClass({
  displayName: 'Tabs',

  propTypes: {
    tabs: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number,
        title: React.PropTypes.string
      }).isRequired
    ).isRequired,
    tab: React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string
    }).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tabs !== this.props.tabs) {
      return true;
    }

    if (nextProps.tab !== this.props.tab) {
      return true;
    }

    return false;
  },

  onChange (tab) {
    this.props.onChange(tab);
  },

  renderTabs() {
    return this.props.tabs.map((tab, index, array) => (
      <div key={tab.id}
           style={{width: `${100 / array.length}%`}}
           className={classnames('react-datepicker__tab', {'react-datepicker__tab--active': tab.id === this.props.tab.id})}
           onClick={e => this.onChange(tab)}>
        <span className="react-datepicker__tab-title">{tab.title}</span>
      </div>
    ));
  },

  render () {
    return (
      <div className="react-datepicker__tabs-container">
        {this.renderTabs()}
      </div>
    )
  }
});

module.exports = Tabs;
