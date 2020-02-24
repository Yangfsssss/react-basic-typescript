import React from "react";
import Person from "./Person/Person";




const persons = (props: any) => { 
  return props.persons.map((person: any, index: number) => {
    return (
      <Person
        myclick={() => props.click(index)}
        name={person.name}
        count={person.count}
        key={person.id}
        changed={(event: any) => props.changed(event, person.id)}
      />
    );
  })
}

export default persons;
