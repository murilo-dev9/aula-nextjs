'use client'

import { useState } from "react";
import Link from "next/link";
import style from "./page.module.css"

export default function contador() {

    const [num1, setNum1] = useState(0);

    function handleNum1() {
        setNum1(num1 + 1);
    }

    const [num2, setNum2] = useState(0);

    function handleNum2() {
        setNum2(num2 + 1);
    }

    return (
        <div className={style.gr}>
            <h1>Atividade 2</h1>
            <h2>contador para truco</h2>
            <div className={style.pn}>
                <div className={style.ctd}>
                    <h1>time 1</h1>
                    <label>{`${num1} pontos:`}</label>
                    <label onClick={handleNum1}>+1</label>
                </div>
                <div className={style.ctd}>
                    <h1>time 2</h1>
                    <label>{`${num2} pontos:`}</label>
                    <label onClick={handleNum2}>+1</label>
                </div>
            </div>
        </div>
    )
}
