'use client'

import { useState } from "react";
import Botao from "./botão";
import Link from "next/link";
import Style from"./page.module.css"

export default function Componentes (){
    
 const [name, setName] = useState("");

    function handleabel(){
        setName("Abel");
    }
    
    function handlemiguel(){
        setName("Miguel");
    }

    function handlelucifer(){
        setName("Lucifer");
    }

    function handlecaim(){
        setName("Caim");
    }

    function handleJesus(){
        setName("Jesus");
    }
    return(
        <div>
            <h1>Atividade 3</h1>
            <label>{`nome ${name} `}</label>
            <div className={Style.bt}>
            <Botao text={"Jesus"} click={handleJesus} action={""}></Botao>
            <Botao text={"Abel"} click={handleabel} action={"Abel"}></Botao>
            <Botao text={"miguel"} click={handlemiguel} action={"miguel"}></Botao>
            <Botao text={"caim"} click={handlecaim} action={"caim"}></Botao>
            <Botao text={"lucifer"} click={handlelucifer} action={"lucifer"}></Botao>
        </div>
        </div>
    )
}