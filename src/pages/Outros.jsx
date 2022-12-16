import styles from '../styles/pages/outros.module.css'

import { CursoHeader } from '../components/CursoHeader'
import { CursoMain } from '../components/CursoMain'


export function Outros() {
    return (
        <main>
        <CursoHeader />
        <CursoMain
            title="3 Informática para iniciantes"
            text="Informações para iniciantes ou idosos que queiram se atrever no mundo virtual com segurança."
            aula="Aula 1:"
            aulaTitulo="ligando o computador"
            video="333333333" />
    </main >
    )
}