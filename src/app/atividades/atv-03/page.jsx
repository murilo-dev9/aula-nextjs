'use client'

import { useState } from "react";
import Botao from "./botão";
import Link from "next/link";
import Style from "./page.module.css";

export default function Componentes() {

    const [name, setName] = useState("");

    function handleCadastrar() {
        setName("cadastrar");
    }

    function handleEditar() {
        setName("Editar");
    }

    function handleLista() {
        setName("Listar");
    }

    function handleExcluir() {
        setName("Excluir");
    }

    function handleCancelar() {
        setName("Cancelar");
    }
    return (
        <div className={Style.gr}>
            <h1>Atividade 3</h1>
            <label>{`Nome: ${name} `}</label>
            <div className={Style.bt}>
                <Botao text={"Cadastrar"} click={handleCadastrar} action={"c1"}></Botao>
                <Botao text={"Editar"} click={handleEditar} action={"c2"}></Botao>
                <Botao text={"Listar"} click={handleLista} action={"c3"}></Botao>
                <Botao text={"Excluir"} click={handleExcluir} action={"c4"}></Botao>
                <Botao text={"Cancelar"} click={handleCancelar} action={"c5"}></Botao>
            </div>
            <Link href={"/"}>voltar</Link>
        </div>
        
    )
}