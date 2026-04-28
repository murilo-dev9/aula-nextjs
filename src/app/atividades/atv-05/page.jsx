'use client'

import styles from "./page.module.css"
import { useState , useEffect } from "react"

export default  function crud (){

    const[dados, setDados] = useState("")
    const[historico,setHistorico]= useState([])

   

    const handleExibirDados =(e) =>{
        e.preventDefault();
        if(dados){
            const id = Date.now().toString(36)
            const novosDados= {Id:id, produto:dados} 
           // `id produto ${id} produto: ${dados}` 

            setHistorico([...historico, novosDados])
            
        }
    }
    
    const handleMudarDados = () =>{
        historico.filter()
    }

return(
<div>
    <h1>mockup CRUD Vite</h1>

    <form onSubmit={handleExibirDados}>
        <input name="dados" type="text" placeholder="digite algo..." onChange={e => setDados(e.target.value)}/>
        <input type="submit" value="+adicionar" />
    </form>

    <div>
        {
            historico.map( item => <p key={item}>{item}</p>) 
        }
    </div>
</div>

)

}