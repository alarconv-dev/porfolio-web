import { listaProyectos } from '../data/proyectos';

export default function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <p className="sub">Todos tienen el código disponible en GitHub.</p>
      <div className="grid">
        {listaProyectos.map((p) => (
          <article className="card" key={p.id}>
            <div>
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
            </div>
            <div>
              <ul className="tags">
                {p.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="links">
                <a href={p.linkGithub} target="_blank" rel="noreferrer">Código en GitHub</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo en vivo</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
