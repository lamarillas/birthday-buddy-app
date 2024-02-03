import React from 'react'
import data from '../../data';
import { useState } from 'react';
import Person from './Person';

const PersonList = () => {

  const [people, setPeople] = useState(data);

  return (
    <>
        <h3>{ people.length } Birthdays today</h3>
        {
          people.map((person) => <Person key={person.id} person={person} /> )
        }
        <button className='btn btn-block'>Clear all</button>
    </>
  )
}

export default PersonList