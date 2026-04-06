'use client'

import { useState } from "react";
import Botao from "./botão";
import Link from "next/link";
import Style from "./page.module.css";

export default function Componentes() {

    const [name, setName] = useState("");

    function handleabel() {
        setName("Abel");
    }

    function handlemiguel() {
        setName("Miguel");
    }

    function handlelucifer() {
        setName("Lucifer");
    }

    function handlecaim() {
        setName("Caim");
    }

    function handleJesus() {
        setName("Jesus");
    }
    return (
        <div className={Style.gr}>
            <h1>Atividade 3</h1>
            <label>{`nome ${name} `}</label>
            <div className={Style.bt}>
                <Botao text={"Jesus"} click={handleJesus} action={"c1"}></Botao>
                <Botao text={"Abel"} click={handleabel} action={"c2"}></Botao>
                <Botao text={"miguel"} click={handlemiguel} action={"c3"}></Botao>
                <Botao text={"caim"} click={handlecaim} action={"c4"}></Botao>
                <Botao text={"lucifer"} click={handlelucifer} action={"c5"}></Botao>
            </div>
            <Link href={"/"}>voltar</Link>
        </div>
        
    )
}