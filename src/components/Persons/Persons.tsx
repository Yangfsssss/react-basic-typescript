import React from "react";
import Person from "./Person/Person";

class Persons extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[Persons.js] constructor is running...");
  }

  // componentWillMount
  componentWillMount() {
    console.log("[Persons.js] componentWillMount is running...");
  }

  // componentDidMount
  componentDidMount() {
    console.log("[Persons.js] componentDidMount is running...");
  }

  // 更新组件生命周期钩子函数
  componentWillReceiveProps(nextProps: any) {
    console.log(
      "[UPDATE Persons.js] componentWillReceiveProps is running...",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps: any, nextState: any): any {
    console.log(
      "[UPDATE Persons.js] shouldComponentUpdate is running...",
      nextProps,
      nextState
    );

    return nextProps.persons == this.props.persons;
  }

  componentWillUpdate(nextProps: any, nextState: any) {
    console.log(
      "[UPDATE Persons.js] componentWillUpdate is running...",
      nextProps,
      nextState
    );
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log(
      "[UPDATE Persons.js] componentDidUpdate is running...",
      prevProps,
      prevState
    );
  }

  render() {
    console.log("[Persons.js]  render is running...");

    return this.props.persons.map((person: any, index: number) => {
      return (
        <Person
          myclick={() => this.props.click(index)}
          name={person.name}
          count={person.count}
          key={person.id}
          changed={(event: any) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
