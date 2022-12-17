import styles from '../styles/pages/curso.module.css'
import React, { useState } from "react"

import { CursoHeader } from '../components/CursoHeader'
import { CursoMain } from '../components/CursoMain'
import { CursoAula } from '../components/CursoAula'
import { CursoTest } from '../components/CursoTest'

import capa6 from '../assets/6.png'
import capa7 from '../assets/7.png'
import capa8 from '../assets/8.png'

export function Outros() {
    function toggleVisible() {
        setIsVisible(!isVisible)
    }
    const [isVisible, setIsVisible] = useState(false)

    return (
        <main>
            <CursoHeader />

            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa6}
                    alt="rrrrr"
                    title="Smar Tv como usar"
                    text=" As tvs conectadas acessam a internet e possuem aplicativos com vídeos online." />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="Conheça as principais funções de uma Smart TV"
                    width="560" height="315" src="https://www.youtube.com/embed/475CZOe65hE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"   />
                <CursoTest />
            </div>



            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa7}
                    alt="rrrrr"
                    title="Smartwatch como usar"
                    text=" Smartwatches têm a função de atender ligações, receber mensagens ou controlar a música sem precisar estar com o celular."
                />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="TUDO SOBRE AS FUNÇÕES DO SMARTWATCH, APRENDA USAR"
                    width="560" height="315" src="https://www.youtube.com/embed/YlxON822150" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoTest />
            </div>


            <div className={styles.capaCurso}>
                <CursoMain
                    imgCurso={capa8}
                    alt="rrrrr"
                    title=" WhatsApp como usar"
                    text=" Serviço de mensagens instantâneas conectado à internet, disponível em multiplataformas." />
                <div className={styles.buttonComeca}>
                    <button type="button" onClick={toggleVisible} className={styles.cursoExpandir}>Começar</button>
                </div>
            </div>
            <div className={`${styles.cursoVideo} ${isVisible ? styles.show : styles.hidden}`}>
                <CursoAula
                    aula="Aula de explicação: "
                    aulaTitulo="Informática para a Melhor Idade e iniciantes"
                    width="560" height="315" src="https://www.youtube.com/embed/3yxW-S1Ne0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />

                <CursoAula
                    aula="Aula 1: "
                    aulaTitulo="Como instalar o whatsapp e criar conta no whatsapp"
                    width="560" height="315" src="https://www.youtube.com/embed/KV4lGtvqKzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 2: "
                    aulaTitulo="Como não ter o whatsapp clonado. Ativar segurança de duas etapas "
                    width="560" height="315" src="https://www.youtube.com/embed/kUa3dbxp13s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 3: "
                    aulaTitulo="Tenha privacidade no whatsapp. Como ajustar configurações de privacidade."
                    width="560" height="315" src="https://www.youtube.com/embed/Ume55rzNqys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 4: "
                    aulaTitulo="Como apagar a conta do whatsapp ou mudar de número"
                    width="560" height="315" src="https://www.youtube.com/embed/s2KjoDT7es8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 5: "
                    aulaTitulo="Menu de conversas. Trocar aparência do whatsapp e consultar configurações"
                    width="560" height="315" src="https://www.youtube.com/embed/yVmF-G_16Tg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 6: "
                    aulaTitulo="Notificações whatsapp. Como configurar os alertas"
                    width="560" height="315" src="https://www.youtube.com/embed/74sG_rgTjYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 7: "
                    aulaTitulo="Como saber quanto espaço o whatsapp usa, e o quanto de internet ele já gastou."
                    width="560" height="315" src="https://www.youtube.com/embed/l_S-woYn9Kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoAula
                    aula="Aula 8: "
                    aulaTitulo="Como configurar mensagem automática no whatsapp business."
                    width="560" height="315" src="https://www.youtube.com/embed/VEMfcLG_woM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                <CursoTest />
            </div>
        </main >
    )
}