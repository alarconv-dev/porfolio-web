const grupos = [
  ["Lenguajes", "JavaScript, Python, Java, C#, PHP, HTML5, CSS3"],
  ["Frontend", "React, Bootstrap 5"],
  ["Backend", "Node.js, Express, ASP.NET Core, Entity Framework Core, Spring Boot"],
  ["Bases de datos", "SQL, MySQL, SQL Server, SQLite"],
  ["APIs y seguridad", "REST, JWT, ASP.NET Core Identity"],
  ["Móvil", "Android nativo con Java (Android Studio)"],
  ["Herramientas", "Git, GitHub, Maven, Composer"],
];

export default function Skills() {
  return (
    <section id="tecnologias">
      <h2>Tecnologías</h2>
      <p className="sub">Las que he usado en los proyectos de arriba.</p>
      <dl className="stack">
        {grupos.map(([titulo, items]) => (
          <div key={titulo}>
            <dt>{titulo}</dt>
            <dd>{items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
