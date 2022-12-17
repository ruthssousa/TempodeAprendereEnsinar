import styles from '../styles/pages/curso.module.css'
import React, { useState } from "react"

import { CursoHeader } from '../components/CursoHeader'
import { CursoMain } from '../components/CursoMain'
import { CursoAula } from '../components/CursoAula'
import { CursoTest } from '../components/CursoTest'

import capa4 from '../assets/4.png'
import capa5 from '../assets/5.png'

export function Celular() {
    function toggleVisible() {
        setIsVisible(!isVisible)
    }
    const [isVisible, setIsVisible] = useState(false)

    return (
        <main>
            <CursoHeader />

            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa4}
                    alt="rrrrr"
                    title="Curso de Android"
                    text=" Aprenda como usar o Android sistema do Google. Aplicativos, Botões, App Telefone, Conexões, Voltar, Home, Recentes e fazer ligações."
                />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/MfLT6WHQ0GQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 2: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/XGW_BuphW3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 3: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/vhEyMXTZT4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 4: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/NHW5HGAzFxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 5: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/Q0U87tGqZwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 6: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                   width="560" height="315" src="https://www.youtube.com/embed/whZcIw6yh-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 7: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/ID_DwwHYg1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 8: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/8J_p9txZYuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 9: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                   width="560" height="315" src="https://www.youtube.com/embed/OegK69DGWrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 10: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/6pvZnGGQ5m8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 11: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/XMrOg-cPbgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 12: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/TXZxuvWpyrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 13: "
                    aulaTitulo="Como usar o Android- Curso de Celular Smartphone"
                    width="560" height="315" src="https://www.youtube.com/embed/oMUJTVB2gMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoTest />
            </div>

            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa5}
                    alt="rrrrr"
                    title="Curso de Iphone da Apple"
                    text=" Aprenda como usar IOS o sistema do Iphone de forma correta e passo a passo, como organizar fotos e vídeos com aplicativo Fotos."
                />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/aMNz6nFOsxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 2: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/C21U-ZzY6-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 3: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/sbyaswqmFiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 4: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/ZpaqzViK6QM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 5: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/jnYpyeVt2lQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 6: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/fZdM4RsbJJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 7: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/AxGqm1vo1W4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 8: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/VKUow8ulk6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 9: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/pOgqo1cwUqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 10: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/zLaTgRjH_rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 11: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                   width="560" height="315" src="https://www.youtube.com/embed/yDfH4z6lgEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <CursoAula
                    aula="Aula 12: "
                    aulaTitulo="Como usar o IPHONE- Celular Apple com IOS"
                    width="560" height="315" src="https://www.youtube.com/embed/x5VAvazqWZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
               
            </div>

        </main >
    )
}