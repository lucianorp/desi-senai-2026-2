import { useState } from "react"

const Contador=()=>{
    // let contador = 0
    let [contador, setContador] = useState(0)

    const incrementar =()=>{
        // contador++
        setContador((prev)=> prev+1)
        console.log("contador", contador)
    }

    

    return(
        <div>
            <p>Valor: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador