import './App.css'
import data from '../data';
import { useState } from 'react';
import PersonList from './components/PersonList'


function App() {

  const [people, setPeople] = useState(data);

  const clearHandle = () => {

      setPeople([]);
  }


  return (
    <main>
      <section className="container">
        <h3>{ people.length } Birthdays today</h3>

        <PersonList people={people} />

        <button className='btn btn-block' onClick={clearHandle}>Clear all</button>


      </section>
    </main>
  )
}

export default App
