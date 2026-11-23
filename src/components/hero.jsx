import { perfil } from '../data/perfil';

export default function Hero() {
  return (
    <section id="sobre-mi" className="hero">
      <div>
        <p className="status">Disponible para prácticas pre-profesionales</p>
        <h1>{perfil.nombre}</h1>
        <p className="rol">Desarrollador Full Stack Junior</p>
        <p>
          Técnico en Desarrollo de Sistemas e Informática. Construyo aplicaciones web con React y
          PHP, y APIs REST con Node.js, ASP.NET Core y Spring Boot conectadas a bases de datos SQL.
        </p>
        <p>También tengo conocimientos de desarrollo Android nativo con Java en Android Studio.</p>
        <div className="acciones">
          <a className="btn" href="#proyectos">Ver proyectos</a>
          <a className="btn ghost" href={`mailto:${perfil.email}`}>Escribirme</a>
          {perfil.cv && <a className="btn ghost" href={perfil.cv} download>Descargar CV</a>}
        </div>
      </div>

      <aside className="ficha">
        <dl>
          <dt>Formación</dt>
          <dd>Técnico en Desarrollo de Sistemas e Informática, egreso en diciembre de 2026</dd>
          <dt>Ubicación</dt>
          <dd>Lima Norte, Perú</dd>
          <dt>Disponibilidad</dt>
          <dd>Presencial en Lima Norte o remoto</dd>
        </dl>
        <a href={perfil.github} target="_blank" rel="noreferrer">GitHub</a>
        {perfil.linkedin && <a href={perfil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        {perfil.whatsapp && <a href={perfil.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}
      </aside>
    </section>
  );
}
