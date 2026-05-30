import react from "react";

export default function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid #334155' }}>
            <h1 style={{ fontSize: '24px', color: '#38bdf8', margin: 0 }}>Portafolio Personal</h1>
            <nav>
                <a href="#sobre-mi" style={{ color: '#94a3b8', margin: '0 15px', textDecoration: 'none' }}>Sobre Mí</a>
                <a href="#proyectos" style={{ color: '#94a3b8', margin: '0 15px', textDecoration: 'none' }}>Proyectos</a>
                <a href="#tecnologias" style={{ color: '#94a3b8', margin: '0 15px', textDecoration: 'none' }}>Tecnologías</a>
            </nav>
        </header>
    );
}