import { useState } from 'react'
import styles from '../styles/pages/contato.module.css'


import autora from '../assets/autoraImg1.png'
import redeSociasIcone1 from '../assets/1.png'
import redeSociasIcone2 from '../assets/2.png'
import redeSociasIcone3 from '../assets/3.png'

export function Contato() {

  const [isVisible, setIsVisible] = useState(false)

  function toggleVisible() {
    setIsVisible(!isVisible)
  }

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')


  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()
    console.log(nome, email, mensagem)
  }

  return (
    <>
      <h3 className={styles.pageTitle}>Contato</h3>

      <section className={styles.contatomain}>
        <form className={styles.form} onSubmit={handleCreateMessage}>
          <input
            className={styles.formInput}
            placeholder="Digite seu nome"
            onChange={handleInputValueNome}
          />
          <input
            className={styles.formInput}
            placeholder="Digite seu email"
            onChange={handleInputValueEmail}
          />
          <textarea
            className={styles.formTextArea}
            placeholder="Digite sua mensagem"
            onChange={handleInputValueMensagem}
          />
          <button type="submit" className={styles.formButton}>Enviar mensagem</button>
        </form>

        <div className={styles.criadora}>
          <img type="button" onClick={toggleVisible} className={styles.criadoraImg} src={autora} alt="Rosto de mulher negra de cabelos curtos e blusa azul." />

          <div className={`${styles.redesocias} ${isVisible ? styles.show : styles.hidden}`}>
            <a href="https://github.com/ruthssousa">
              <img className={styles.redesociasIcone} src={redeSociasIcone1} alt="icone do github na cor preta" />
            </a>
            <a href="www.linkedin.com/in/ruth-sousa-1280a2121">
              <img className={styles.redesociasIcone} src={redeSociasIcone2} alt="icone do linkedin na cor preta" />
            </a>
            <a href="https://codepen.io/ruthssousa">
              <img className={styles.redesociasIcone} src={redeSociasIcone3} alt="icone do codepen na cor preta" />
            </a>       
          </div>
        </div>
      </section>
    </>
  )
}