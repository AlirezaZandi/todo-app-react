import React from "react";

class Filters extends React.Component {
  state = {
    filter: "all",
  };

  handleClick = (e) => {
    const filter = e.target.innerHTML;
    switch (filter) {
      case "All":
        this.setState({ filter: "all" });
        this.props.onFilter("all");
        break;
      case "Active":
        this.setState({ filter: "active" });
        this.props.onFilter("active");
        break;
      case "Completed":
        this.setState({ filter: "completed" });
        this.props.onFilter("completed");
        break;

      default:
        break;
    }
  };
  render() {
    return (
      <div className="filters-container">
        <button
          className={this.state.filter === "all" ? "filter active" : "filter"}
          onClick={(e) => this.handleClick(e)}>
          All
        </button>
        <button
          className={
            this.state.filter === "active" ? "filter active" : "filter"
          }
          onClick={(e) => this.handleClick(e)}>
          Active
        </button>
        <button
          className={
            this.state.filter === "completed" ? "filter active" : "filter"
          }
          onClick={(e) => this.handleClick(e)}>
          Completed
        </button>
      </div>
    );
  }
}

export default Filters;
