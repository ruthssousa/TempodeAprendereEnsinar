import styles from '../styles/pages/curso.module.css'
import React, { useState } from "react"

import { CursoHeader } from '../components/CursoHeader'
import { CursoMain } from '../components/CursoMain'
import { CursoAula } from '../components/CursoAula'
import { CursoTest } from '../components/CursoTest'

import capa1 from '../assets/capaCursoComputador1.png'
import capa2 from '../assets/capaCursoComputador2.png'
import capa3 from '../assets/capaCursoComputador3.png'

export function Computador() {
    function toggleVisible() {
        setIsVisible(!isVisible)
    }
    const [isVisible, setIsVisible] = useState(false)

    return (
        <main>
            <CursoHeader />

            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa1}
                    alt="rrrrr"
                    title="Informática para iniciantes"
                    text=" Informações para iniciantes ou idosos que queiram se atrever no mundo virtual com segurança."
                />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="Informação - Conteúdo impróprio para velhos. Voce só envelhece quando desiste de aprender"
                    height="315" src="https://www.youtube.com/embed/f8eBQ5jGiRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 2: "
                    aulaTitulo="Computador para idosos. Saber usar, é a questão!"
                    width="560" height="315" src="https://www.youtube.com/embed/4r_u7-ILtb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 3: "
                    aulaTitulo="E-mail – Identidade com endereço virtual. Indispensável para usuários de internet"
                    width="560" height="315" src="https://www.youtube.com/embed/HxRmwjtLj7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 4: "
                    aulaTitulo="Informação muito importante para visitantes e criadores de conteúdo, iniciantes"
                    width="560" height="315" src="https://www.youtube.com/embed/w5yfn1iq3xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 5: "
                    aulaTitulo="Informática - Proibido para menores de 50 anos"
                    width="560" height="315" src="https://www.youtube.com/embed/okkawtv4O3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoTest />
            </div>

            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa2}
                    alt="rrrrr"
                    title="Curso Básico de Informática- Passo a Passo"
                    text=" Informações para iniciantes ou idosos que queiram se atrever no mundo virtual com segurança."
                />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="Informatica Basica para Idosos - 01 Apresentacao"
                    width="560" height="315" src="https://www.youtube.com/embed/Fqzlq_HtFaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 2: "
                    aulaTitulo="Informatica Basica para Idosos - 02 Componentes basicos"
                    width="560" height="315" src="https://www.youtube.com/embed/ylmBwtqHD10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 3: "
                    aulaTitulo="Informatica Basica para Idosos - 03 Copiar, criar, colar e renomear arquivos"
                    width="560" height="315" src="https://www.youtube.com/embed/fZvY4kCr67I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 4: "
                    aulaTitulo="Informatica Basica para Idosos - 04 Navegando pelo Windows"
                    width="560" height="315" src="https://www.youtube.com/embed/DhNKJuh_g-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 5: "
                    aulaTitulo="Informatica Basica para Idosos - 05 Acessando a internet"
                    width="560" height="315" src="https://www.youtube.com/embed/0lhffMgEkd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 6: "
                    aulaTitulo="Informatica Basica para Idosos - 06 Criando e-mail"
                    width="560" height="315" src="https://www.youtube.com/embed/fgdg1q5A8aU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 7: "
                    aulaTitulo="Informatica Basica para Idosos - 07 Como usar o Facebook"
                    width="560" height="315" src="https://www.youtube.com/embed/_G9RfvnYL_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 8: "
                    aulaTitulo="Informatica Basica para Idosos - 08 Vendo videos no YouTube"
                    width="560" height="315" src="https://www.youtube.com/embed/c1oXK-bgZKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 9: "
                    aulaTitulo="Informatica Basica para Idosos - 09 Digitacao"
                    width="560" height="315" src="https://www.youtube.com/embed/FgvcJdDDB6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 10: "
                    aulaTitulo="Informatica Basica para Idosos - 10 Dominando"
                    width="560" height="315" src="https://www.youtube.com/embed/O_9UGBvOnH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoTest />
            </div>


            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa3}
                    alt="rrrrr"
                    title="Curso de Informática Iniciantes e Melhor Idade"
                    text=" Informações para iniciantes ou idosos que queiram se atrever no mundo virtual com segurança."
                />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula de explicação: "
                    aulaTitulo="Informática para a Melhor Idade e iniciantes"
                    width="560" height="315" src="https://www.youtube.com/embed/3yxW-S1Ne0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="Curso de Informática para Iniciantes e Melhor Idade"
                    width="560" height="315" src="https://www.youtube.com/embed/04dlLcF-pLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 2: "
                    aulaTitulo="Curso de Informática para Iniciantes e Melhor Idade"
                    width="560" height="315" src="https://www.youtube.com/embed/04dlLcF-pLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 3: "
                    aulaTitulo="Curso de Informática para Iniciantes e Melhor Idade"
                    width="560" height="315" src="https://www.youtube.com/embed/npD8yZpJFBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 4: "
                    aulaTitulo="Curso de Informática para Iniciantes e Melhor Idade"
                    width="560" height="315" src="https://www.youtube.com/embed/W6AjrQndE-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 5: "
                    aulaTitulo="Curso de Informática para Iniciantes e Melhor Idade - Janelas do Windows"
                    width="560" height="315" src="https://www.youtube.com/embed/ayuK7DzYIWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 6: "
                    aulaTitulo="Curso de Informática para Iniciantes e Melhor Idade - Explorando o Computador"
                    width="560" height="315" src="https://www.youtube.com/embed/eIwksQouogA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoTest />
            </div>
        </main >
    )
}