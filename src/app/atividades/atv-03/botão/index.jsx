import style from "./index.module.css"

function Botao({text, click, action}){
    return(
        
        <button onClick={click} className={`${style.bt} ${action === "c1"? style.c1 :action==="c2"?style.c2:action==="c3"?style.c3:action==="c4"?style.c4:action==="c5"?style.c5:style.bt}`}>
            {text}
        </button>

       

)
}
export default Botao;