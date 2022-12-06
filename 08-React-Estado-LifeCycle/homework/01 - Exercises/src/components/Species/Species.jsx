import { Button } from 'bootstrap'
import React from 'react'

export default function Species (props) {
  return (
    <div>
      <h2>Species</h2>
      {props.species.map((element, index) => <button key={index} value={element} onClick={props.handleSpecies}>{element}</button>)}      
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}
