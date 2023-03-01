import { useState } from 'react'

const FuncComponent = () => {
    const [estudiante,setEstudiante]=useState({
        name:'Girlesa',
        country: 'Colombia'
    })
    const[count, setCount]= useState(0)

    const changeName=()=>{
        if (estudiante.name ==='Girlesa')setEstudiante({...estudiante,name:'Julieth'})
        else setEstudiante({...estudiante,name:'Girlesa'})
    }
  return (
    <div>
        <h1>Ejemplo cambio de hombre con frase</h1>
        {console.log(estudiante)}

        <h2>{estudiante.name}</h2>
        <button onClick={changeName}> Cambiar nombre</button>
        
        {/*Operación ternaria
         1. La condicion 
         ? 
         2.true (se ejecuta) 
         :
         3. Si es false se ejecuta.*/}

         {estudiante.name ==='Girlesa' ? 
        <h3>{estudiante.name} ! Veo que eres buena en Backend</h3>
        :
        <h3>{estudiante.name} ! Buenisimos esos estilos de css</h3>
        }

        <h1>Ejemplo contador</h1>
        <button disabled={count == 0} onClick={() => setCount(count-1)}>-</button>
        {count}
        <button onClick={() => setCount(count+1)}>+</button>

        </div>    
  )
}

export default FuncComponent