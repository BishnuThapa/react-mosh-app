import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 10,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <>
        {this.renderTags()}
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
      </>
    );
  }
  //   getBadgeClasses() {
  //     let classes = "badge m-2 bg-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   formatCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Counter;
