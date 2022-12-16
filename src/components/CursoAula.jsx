import styles from '../styles/components/cursomain.module.css'
import React, { useState } from "react"



export function CursoAula(props) {

    function toggleVisible() {
        setIsVisible(!isVisible)
    }
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={styles.cursoContainer}>
            <div className={styles.cursoPlay}>
                <p className={styles.cursoAula}>{props.aula}</p>
                <p className={styles.cursoAulaTitulo}>{props.aulaTitulo} </p>
                <div className={styles.right}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Expandir</button>
                </div>
            </div>

            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <iframe
                    width={props.width}
                    height={props.height}
                    src={props.src}
                    title={props.title}
                    frameborder={props.frameborder}
                    allow={props.allow}
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}