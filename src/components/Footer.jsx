import styles from '../styles/components/footer.module.css'

export function Footer() {
  return(
    <div className={styles.footerContainer}>
     <p className={styles.footerTitle}>Feito com ♡ por <a target="_blank" href="https://github.com/ruthssousa">Ruth Sousa</a>, como projeto final da turma On20, do curso Todas em tec, da Reprograma.</p>
    </div>
  )
}