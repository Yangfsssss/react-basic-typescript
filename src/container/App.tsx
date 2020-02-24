import React from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import MyHeader from "../components/Header/Header";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    // state:用于改变组件内容状态的值（动态）
    // props:用于组件通信进行传值
    this.state = {
      persons: [
        { id: 1, name: "米斯特吴", count: 50 },
        { id: 2, name: "Henry", count: 5 },
        { id: 3, name: "Hemiah", count: 15 }
      ],
      otherState: "anything",
      showPersons: false
    };
  }

  switchNameHandler = (newName: string) => {
    // console.log('Hello');
    // this.state.persons[0].name = "米斯特"
    this.setState({
      persons: [
        { name: newName, count: 50 },
        { name: "Henry", count: 50000 },
        { name: "Hemiah", count: 15 }
      ]
    });
  };

  nameChangedHandler = (event: any, id: number) => {
    const personIndex = this.state.persons.findIndex((p: any) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex: number) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }


    return (
      <div className="App">
        <MyHeader 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
