import Link from "next/link";
import styles from "./page.module.css";
export default Home;

function Home() {
  return (
    <div className={styles.conteinerHome}>
    <div className={styles.conteinerLista}>
      <h1>Exemplos</h1>
      <Link href="/exemplos/ex-01">exemplo 1</Link>
      <Link href="/exemplos/ex-02">exemplo 2</Link>
      <Link href="/exemplos/ex-03">exemplo 3</Link>
      <Link href="/exemplos/ex-04">exemplo 4</Link>
      <Link href="/exemplos/ex-05">exemplo 5</Link>
    </div>
    <div className={styles.conteinerLista}>
      <h1>Atividades</h1>
      <Link href="/atividades/atv-01">atividade1</Link>
      <Link href="/atividades/atv-02">atividade2</Link>
      <Link href="/atividades/atv-03">atividade3</Link>
      <Link href="/atividades/atv-04">atividade4</Link>
      <Link href="/atividades/atv-04(Professor)">atividade4(Professor)</Link>
    </div>
    </div>
  );
}