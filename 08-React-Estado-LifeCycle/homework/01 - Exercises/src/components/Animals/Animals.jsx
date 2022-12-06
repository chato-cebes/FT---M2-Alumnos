import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return(
    <div>{
      this.props.animals.map((elemento, index) => (
        <div>
          <h5 key={index}>{elemento.name}</h5>
          
          <img 
          src={elemento.image} 
          alt={elemento.name} 
          width= {"300px"}
          />
          <br/>
          <span>{elemento.specie}</span>
          <hr/>
        </div>
      ))}
    </div>
    )
  }
}
