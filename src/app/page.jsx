import Image from "next/image";
import styles from "./page.module.css";
function Home() {
  return (
    <div className={styles.containerExemplo}>
      <h1>React com Next JS</h1>
      <h2>Aula de introdução</h2>
      <h3>Leiaute e Estilização</h3>
      <p>Nesta aula iremos entender o uso de CSS global e local.</p>
      <label>Exemplo Label</label>
      <small>Exemplo Small</small>
      <div className={styles.conteinerExPosicao}>
        <div className={styles.divVermelha}></div>
        <div className={styles.divVerde}></div>
      </div>
        <div className={styles.divbutton}>
      <a href="/ex-01"><button>Pag 2</button></a>
        </div>
        <div className={styles.divbutton}>
      <a href="/ex-02"><button>Pag 3</button></a>
        </div>
    </div>
  );
};
export default Home;
