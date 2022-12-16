import styles from '../styles/pages/duvidas.module.css'

export function Duvidas() {
  return (
    <div>
      <h3 className={styles.pageTitle}>Duvidas</h3>
      <div className={styles.duvidasGeral}>
        <section className={styles.duvidas}>
          <div className={styles.pergunta}>Pergunta</div>
          <div className={styles.respostas}>Respostas</div>
        </section>
        <section className={styles.temas}>
          <h4>Temas</h4>
          <p className={styles.tema}>computador</p>
          <p className={styles.tema}>celular</p>
          <p className={styles.tema}>rede sociais</p>
          <p className={styles.tema}>pesquisas</p>
          <p className={styles.tema}>editores</p>
        </section>
      </div>
    </div>
  )
}