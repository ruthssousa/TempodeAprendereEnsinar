import { Link } from 'react-router-dom'

import styles from '../styles/components/cursoHeader.module.css'

export function CursoHeader() {
  return(
    <div>
    <p className={styles.pageTitle}>Cursos para aprender usar:</p>
    <ul className={styles.CursoHeaderContainer}>
      <li className={styles.CursoHeaderItem}>
                <Link className={styles.CursoHeaderLink} to="/Computador"><p>Computador</p></Link>
      </li>
      <li className={styles.CursoHeaderItem}>
                <Link className={styles.CursoHeaderLink} to="/Celular"><p>Celular</p></Link>
      </li>
      <li className={styles.CursoHeaderItem}>
                <Link className={styles.CursoHeaderLink} to="/Outros"><p>Outros</p></Link>
      </li>
    </ul>
    </div>
  )
}