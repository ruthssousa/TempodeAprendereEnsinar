import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'
import logo from '../assets/logo2.gif'

export function Menu() {
  return (
    <div className={styles.menuHeader}>
      <img className={styles.logo} src={logo} alt="" />

      <ul  className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/cursos">Cursos</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/duvidas">Duvidas</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/contato">Contato</Link>
        </li>
      </ul>
    </div>
  )
}