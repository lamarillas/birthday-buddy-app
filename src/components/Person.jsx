import React from 'react'

const Person = ({image, name, age}) => {
  // const person = {...props.person};
  // console.log(person);
  return (
    <article className='person'>
      <img className='img' src={ image } alt={name} />
      <div>
        <h4>{ name }</h4>
        <p>{ age } years </p>
      </div>
    </article>
  )
}

export default Person