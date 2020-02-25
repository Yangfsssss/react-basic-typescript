import React from "react";
// import classes from '../Header/Header';

const MyHeader = (props: any) => {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px soild blue",
    padding: "8px",
    cursor: "pointer"
  };

  if (props.showPersons) {
    style.backgroundColor = "red";
  }

  const assignedClasses: any = [];

  // if (props.persons.length <= 2) {
  //   assignedClasses.push(classes.red);
  // }

  // if (props.persons.length <= 1) {
  //   assignedClasses.push(classes.bold);
  // }

  // console.log(assignedClasses);

  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>Hi,React App</p>
      <button style={style} onClick={props.clicked}>
        内容切换
      </button>
    </div>
  );
};

export default MyHeader;
