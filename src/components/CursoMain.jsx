import styles from '../styles/components/cursomain.module.css'
import React, { useState } from "react"



export function CursoMain(props) {

function toggleVisible() {
    setIsVisible(!isVisible)
  }
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <div className={styles.cursoContainer}>

            <div className={styles.cursoInformation}>
                <div>
                    <img className={styles.imgCurso} src={props.imgCurso} alt={props.alt} />
                </div>
                <div>
                    <p className={styles.cursoText}>Curso de:</p>
                    <h3 className={styles.cursoTitle}>{props.title}</h3>
                    <p className={styles.cursoText}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}