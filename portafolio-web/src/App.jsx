import React from 'react';
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '20px' }}>
      
      <Header />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>

      <footer style={{ textAlign: 'center', marginTop: '40px', color: '#64748b', fontSize: '14px' }}>
        © {new Date().getFullYear()} - Creado por Alarcón V. - Todos los derechos reservados.
      </footer>

    </div>
  );
}