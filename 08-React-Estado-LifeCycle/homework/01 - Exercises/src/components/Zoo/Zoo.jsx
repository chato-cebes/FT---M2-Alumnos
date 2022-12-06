import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName : "",
      animals : [],
      species : [],
      allAnimals : []
   });

   const handleInputChange = (evento) =>{
      setZoo({... zoo, zooName : evento.target.value});            
   }
   
   
   const handleSpecies = (evento) =>{
      setZoo({... zoo, animals: zoo.allAnimals.filter(a => a.specie === evento.target.value)});
   }
   
   const handleAllSpecies = (() =>{
      setZoo({... zoo, animals: zoo.allAnimals})
   })

   React.useEffect(() => {
   fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then(data =>{
         console.log(data)
         setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
         })}
      )
      .catch((error) => console.log(error));
   },[])

   return (
      <div>
         <label htmlFor='nameInput'>Zoo Name:</label>
         
         <input 
         onChange={handleInputChange} 
         type="text" 
         name = 'nameInput'
         value={zoo.zooName} 
         />
         
         <h1>{zoo.zooName}</h1>
         
         <hr/>
         <Species
         species={zoo.species} 
         handleSpecies={handleSpecies}
         handleAllSpecies={handleAllSpecies} 
         />
         
         <Animals
         animals={zoo.animals}
         />

      </div>
   );
}
