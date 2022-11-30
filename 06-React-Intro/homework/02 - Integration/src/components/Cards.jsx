import React from 'react';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;   
   return(
      <div className='cards'>{
         characters.map ((elemento, index) => <Card
         key = {index}
         name ={elemento.name}
         species = {elemento.species}
         gender = {elemento.gender}
         image = {elemento.image}
         onClose ={()=> window.alert(`Emulamos que se cierra la card de ${elemento.name}`)}        
         />)
         }
      </div>
   );
}