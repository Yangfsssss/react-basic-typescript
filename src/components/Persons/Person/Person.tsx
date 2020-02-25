import React from "react";
import "./Person.css";

class Person extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[Person.js] constructor is running...");
  }

  componentWillMount() {
    console.log("[Person.js] componentWillMount is running...");
  }

  componentDidMount() {
    console.log("[Person.js] componentDidMount is running...");
  }

  render() {
    console.log("[Person.js]  render is running...");
    return (
      <div className="Person">
        <p onClick={this.props.myclick}>
          大家好，我是{this.props.name}!,我已经拥有{this.props.count}个作品
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        ></input>
      </div>
    );
  }
}

export default Person;
