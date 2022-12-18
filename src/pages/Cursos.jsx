import styles from '../styles/pages/cursos.module.css'

import { Link } from 'react-router-dom'

import technology1 from '../assets/technology1.gif'
import technology2 from '../assets/technology2.gif'
import technology3 from '../assets/technology3.gif'


export function Cursos() {
  return (
    <div>
      <h3 className={styles.pageTitle}>Cursos</h3>
      <div className={styles.cursosGeral}>

        <div className={styles.cursos}>
          <Link className={styles.cursoLink} to="/Computador">
            <img className={styles.imgTechnology} src={technology1} alt="Imagem animada de um computador" />
            <h4 className={styles.cursoTitle}>Computador</h4></Link>
          <p>Aprenda a usar o computador, navegar na internet: acessar sites, ouvir músicas e ver vídeos, pesquisar no Google, como traduzir textos, como jogar, criar um e-mail e se comunicar, ver avaliações de empresas, questões sobre segurança e muito mais.</p>
        </div>

        <div className={styles.cursos}>
          <Link className={styles.cursoLink} to="/Celular">
            <img className={styles.imgTechnology} src={technology2} alt="Imagem animada de um celular" />
            <h4 className={styles.cursoTitle}>Celular</h4></Link>
          <p>Aprenda a usar o celular: como ligar e desligar, como usar os aplicativos, como conversar com as pessoas, tirar fotos, carregar o aparelho e muito mais.</p>
        </div>

        <div className={styles.cursos}>
          <Link className={styles.cursoLink} to="/Outros">
            <img className={styles.imgTechnology} src={technology3} alt="Imagem animada de um smartwatch" />
            <h4 className={styles.cursoTitle}>Outros</h4></Link>
          <p>Aprenda a usar Smart Tv, Smartwatch e WhatsApp: Acessar a internet com o relógio inteligente e Smart TV. No WhatsApp, se conectar com diversas pessoas.</p>

        </div>
      </div>

    </div>
  )
}


