import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <div className="filters-container">
        <button className="filter active">All</button>
        <button className="filter">Active</button>
        <button className="filter">Completed</button>
      </div>
    );
  }
}

export default Filters;
