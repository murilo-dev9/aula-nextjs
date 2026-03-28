export default Botao;
import stlyle from "./index.module.css"

function Botao({text, click, action}){
    return(

        <button onclick={click} className={`${stlyle.bt} ${action === "" ? stlyle.c1 : stlyle.c2 } `}>
            {text}
        </button>

    )
}