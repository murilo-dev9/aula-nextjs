'use client'

import { useState } from "react";
import style from"./page.module.css"

export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <div className={style.gr }>
            <label>{`Contador: ${num}`}</label>
            <label className={style.button} onClick={() => handleIncrementa()} >+1</label>         
       
        </div>
    );
}