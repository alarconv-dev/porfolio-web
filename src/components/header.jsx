import { perfil } from '../data/perfil';

export default function Header() {
  return (
    <header className="top">
      <span className="brand">{perfil.nombre}</span>
      <nav>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#tecnologias">Tecnologías</a>
      </nav>
    </header>
  );
}
