import styles from '../styles/pages/duvidas.module.css'

export function Duvidas() {
  return (
    <div>
      <h3 className={styles.pageTitle}>Dúvidas</h3>
      <div className={styles.duvidasGeral}>
        <section className={styles.duvidas}>
          <div className={styles.pergunta}>Perguntas</div>
          <div className={styles.respostas}>Respostas</div>
        </section>
        <section className={styles.temas}>
          <h4>Temas</h4>
          <p className={styles.tema}>Computador</p>
          <p className={styles.tema}>Celular</p>
          <p className={styles.tema}>Redes sociais</p>
          <p className={styles.tema}>Pesquisas</p>
          <p className={styles.tema}>Editores</p>
        </section>
      </div>
    </div>
  )
}