// import React from 'react';

// const dateSelector = ({ getData, changeHandler, startDate, endDate }) => (
//   <form>
//     <label htmlFor="startDate">
//       Start date:
//       <input
//         id="startDate"
//         type="text"
//         value={startDate}
//         onChange={event => changeHandler(event, 'startDate')}
//       />
//     </label>
//     <label htmlFor="endDate">
//       End date:
//       <input
//         id="endDate"
//         type="text"
//         value={endDate}
//         onChange={event => changeHandler(event, 'endDate')}
//       />
//     </label>
//     <button type="button" onClick={getData}>Submit</button>
//   </form>
// );

// export default dateSelector;


import React, { Component } from 'react';

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event, field) {
    this.setState({ [field]: event.target.value });
  }

  render() {
    const { getData } = this.props;
    const { startDate, endDate } = this.state;
    return (
      <form>
        <label htmlFor="startDate">
          Start date:
          <input
            id="startDate"
            type="text"
            value={startDate}
            onChange={event => this.changeHandler(event, 'startDate')}
          />
        </label>
        <label htmlFor="endDate">
          End date:
          <input
            id="endDate"
            type="text"
            value={endDate}
            onChange={event => this.changeHandler(event, 'endDate')}
          />
        </label>
        <button type="button" onClick={() => getData(startDate, endDate)}>Submit</button>
      </form>
    );
  }
}

export default DateSelector;
