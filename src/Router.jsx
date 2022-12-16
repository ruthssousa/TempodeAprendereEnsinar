import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu } from './components/Menu'

import { Home } from './pages/Home'
import { Cursos } from './pages/Cursos'
import { Computador } from './pages/Computador'
import { Celular } from './pages/Celular'
import { Outros } from './pages/Outros'
import { Duvidas } from './pages/Duvidas'
import { Contato } from './pages/Contato'

import { Footer } from './components/Footer'

export function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/Computador" element={<Computador />} />
                <Route path="/Celular" element={<Celular />} />
                <Route path="/Outros" element={<Outros />} />
                <Route path="/duvidas" element={<Duvidas />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}  