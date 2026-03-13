import Image from "next/image";
import styles from "./page.module.css";
export default Home;

function Home() {
  return (
    <div className={styles.conteinerHome}>
    <div className={styles.conteinerLista}>
      <h1>Exemplos</h1>
    </div>
    <div className={styles.conteinerLista}>
      <h1>Atividades</h1>
    </div>
    </div>
  );
}

