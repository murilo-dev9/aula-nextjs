import style from "./index.module.css"

function Botao({text, click, action}){
    return(
        
        <button onClick={click} className={`${style.bt} ${action === ""? style.c1 :action==="caim"?style.c2:action==="miguel"?style.c3:action==="Jesus"?style.c4:action==="lucifer"?style.c5:style.bt}`}>
            {text}
        </button>

       

)
}
export default Botao;