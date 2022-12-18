import styles from '../styles/pages/home.module.css'
import { Link } from 'react-router-dom'

import technology1 from '../assets/technology1.gif'
import technology2 from '../assets/technology2.gif'
import technology3 from '../assets/technology3.gif'
import cartazCapa from '../assets/cartazCapa1.png'

export function Home() {
  return (
    <div>
      <section className={styles.inicioMain}>
        <div className={styles.inicio1}>
          <h1 className={styles.titulo1}>Tempo de Aprender!</h1>
          <h2 className={styles.subtitulo1}>A sua melhor versão é agora.</h2>
        </div>
        <div className={styles.inicio2}>
          
        </div>

      </section>

      <section className={styles.inicioResources}>
        <div className={styles.inicioCursos}>
          <h3 className={styles.inicioEnsineP}>Aprenda</h3>
          <p className={styles.inicioEnsineP}>Cursos rápidos e gratuitos!</p>
          <div className={styles.imgTechnologys}>
            <Link to="/Computador">
              <img className={styles.imgTechnology} src={technology1} alt="Imagem animada de um computador" />
            </Link>
            <Link to="/Celular">
              <img className={styles.imgTechnology} src={technology2} alt="Imagem animada de um celular" />
            </Link>
            <Link to="/Outros">
              <img className={styles.imgTechnology} src={technology3} alt="Imagem animada de um smartwatch" />
            </Link>
          </div>

        </div>
        <div className={styles.inicioEnsine}>
          <div className={styles.inicioEnsineContainer}>
            <h3 className={styles.inicioEnsineProf}>Ensine</h3>
            <p className={styles.inicioEnsineP}>Seja um professor!</p>
            <Link to="/contato"><p className={styles.inicioEnsineP}><a href="Casal de idosos felizes usando o celular, homem negro, careca e com barba branca e mulher negra de cabelo branco">Entre em contato.</a></p></Link>

          </div>
        </div>
      </section>

      <section className={styles.inicioCollaborator}>
        <h3>Seja um professor!</h3>
        <p><a href="">Saiba mais.</a></p>
      </section>
    </div>
  )
}