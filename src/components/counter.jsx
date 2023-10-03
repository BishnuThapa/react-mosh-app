import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    console.log(product);
    // console.log("Increment Clicked");
    this.setState({ count: this.state.count + 1 });
  };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        {/* {this.renderTags()} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={this.doHandleIncrement}
          //   onClick={() => this.handleIncrement(product)}
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={this.handleDecrement}
        >
          Decrement
        </button>
      </>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
