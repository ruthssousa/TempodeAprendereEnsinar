import styles from '../styles/pages/home.module.css'
import { Link } from 'react-router-dom'

import technology1 from '../assets/technology1.gif'
import technology2 from '../assets/technology2.gif'
import technology3 from '../assets/technology3.gif'
import gifCapa from '../assets/giphy.gif'

export function Home() {
  return (
    <div>
      <section className={styles.inicioMain}>
        <h1>Tempo de Aprender!</h1>
        <h2>A sua melhor versão é agora</h2>
      </section>

      <section className={styles.inicioResources}>
        <div className={styles.inicioCursos}>
          <h3 className={styles.inicioEnsineP}>Aprenda</h3>
          <p className={styles.inicioEnsineP}>Cursos rapidos e gratuidos!</p>
          <div className={styles.imgTechnologys}>
            <Link to="/Computador">
              <img className={styles.imgTechnology} src={technology1} alt="" />
            </Link>
            <Link to="/Celular">
              <img className={styles.imgTechnology} src={technology2} alt="" />
            </Link>
            <Link to="/Outros">
              <img className={styles.imgTechnology} src={technology3} alt="" />
            </Link>
          </div>

        </div>
        <div className={styles.inicioEnsine}>
          <h3 className={styles.inicioEnsineP}>Ensine</h3>
          <p className={styles.inicioEnsineP}>Seja um professor!</p>
          <p className={styles.inicioEnsineP}><a href="">Saiba mais.</a></p>

        </div>
      </section>

      <section className={styles.inicioCollaborator}>
        <h3>Seja um professor!</h3>
        <p><a href="">Saiba mais.</a></p>
      </section>
    </div>
  )
}