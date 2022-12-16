import styles from '../styles/components/cursomain.module.css'
import React, { useState } from "react"



export function CursoTest(props) {

function toggleVisible() {
    setIsVisible(!isVisible)
  }
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <div className={styles.cursoContainer}>
            <div className={styles.cursoTestes}>
                <p className={styles.cursoTeste}>Teste</p>
                <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Expandir</button>
            </div>

            <div  className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
               
            </div>

            <div className={styles.cursoEnd}></div>

        </div>
    )
}