import Link from "next/link";
import Image from "next/image";
import salsicha from '../public/file.svg';

export default atividade01;


function atividade01(){
    return(
        <div>
            <h1>atividade 1</h1>
            <div>
                <h1>apenas um cachorro salsicha</h1>
                <Image src={salsicha}></Image>
                <Link href="/">voltar</Link>
            </div>
               
        </div>
    )
}