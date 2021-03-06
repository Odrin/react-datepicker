import React from 'react'
import DatePicker from 'react-datepicker'

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null
    };
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          TODO
        </code>
      </pre>
      <div className="column">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholderText='Click to select a date and year'
            withTabs fixedHeight/>
      </div>
    </div>
  }
}
