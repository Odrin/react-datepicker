import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Tabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      }).isRequired
    ).isRequired,
    tab: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tabs !== this.props.tabs) {
      return true;
    }

    if (nextProps.tab !== this.props.tab) {
      return true;
    }

    return false;
  }

  onChange (tab) {
    this.props.onChange(tab);
  }

  renderTabs() {
    return this.props.tabs.map((tab, index, array) => (
      <div key={tab.id}
           style={{width: `${100 / array.length}%`}}
           className={classnames('react-datepicker__tab', {'react-datepicker__tab--active': tab.id === this.props.tab.id})}
           onClick={e => this.onChange(tab)}>
        <span className="react-datepicker__tab-title">{tab.title}</span>
      </div>
    ));
  }

  render () {
    return (
      <div className="react-datepicker__tabs-container">
        {this.renderTabs()}
      </div>
    )
  }
}
