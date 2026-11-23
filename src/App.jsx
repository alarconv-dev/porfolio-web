import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';
import { perfil } from './data/perfil';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <footer>
        ¿Tienes una práctica disponible? Escríbeme a <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
        <br />© {new Date().getFullYear()} {perfil.nombre}
      </footer>
    </div>
  );
}
