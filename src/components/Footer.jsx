import styles from '../styles/components/footer.module.css'

export function Footer() {
  return(
    <div className={styles.footerContainer}>
     <p className={styles.footerTitle}>
     © 2022 - Tempo de aprender e ensinar! </p>
     <p className={styles.footerTitle}>Criado com ♥ por <a target="_blank" href="https://github.com/ruthssousa">Ruth Sousa</a> como projeto final do curso Todas em Tech - Reprograma.</p>
    </div>
  )
}