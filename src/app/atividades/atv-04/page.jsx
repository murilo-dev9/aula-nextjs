'use client'
import {use, useState} from 'react'
import style from "./page.module.css";

export default function formComponent (){
    const[inputValue, setInputValue] = useState({
        id:'', quant:'', nome:'',
    });
   

    const [historico, setHistorico] = useState([])

    const handleSubmit = (e) => 
        { e.preventDfault()
            if (!inputValue.produto || !inputValue.quant) return
                const novaEntrada = `${quant} x ${name}`
                setHistorico([...novaEntrada])
            
    }

return(
    <div>
        <form onSubmit={handleSubmit} className={style.form}>
            <h2>Lista de produtos</h2>
            <input type="number" placeholder='quantidade' onChange={e => setInputValue({...inputValue, quant:e.target.value})}/>
            <input type="text" placeholder='nome do produto' onChange={e => setInputValue({...inputValue, nome:e.target.value})}/>
            <button type="submit">enviar</button>
        </form>
        <div>
            {
                historico.map(item => <p key={item}>{item}</p>)
            }
        </div>

    </div>
)



}