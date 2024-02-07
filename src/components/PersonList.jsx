import React from 'react'
import Person from './Person';

const PersonList = ({people}) => {



  return (
    <section>
      {
        people.map((person) => <Person key={person.id} {...person} /> )
      }
    </section>
  )
}

export default PersonList