export default Botao;

import stlyle from "./index.module.css"

function Botao({text, click, action}){
    return(

        <button className={`${stlyle.bt} ${action ==="" ? stlyle.c1 : stlyle.c2 } `}>
            {Text}
        </button>

    )
}