import React from 'react';
import { listaProyectos } from '../data/proyectos';

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: '60px 0', borderBottom: '1px solid #334155' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f8fafc', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Proyectos Ejecutados
      </h2>
      <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 40px 0' }}>
        Repositorios de código que demuestran capacidades en automatización, desarrollo de interfaces y lógica de servidor.
      </p>

      {/* Grid Contenedor de Tarjetas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>

        {/* Mapeo dinámico del Array en JSX */}
        {listaProyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            style={{
              backgroundColor: '#1e293b',
              padding: '25px',
              borderRadius: '8px',
              border: '1px solid #334155',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '18px', color: '#38bdf8', margin: '0 0 12px 0', fontWeight: 'bold' }}>
                {proyecto.titulo}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                {proyecto.descripcion}
              </p>
            </div>

            <div>
              {/* Renderizado de los Tags del proyecto */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {proyecto.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: '11px',
                      backgroundColor: '#0f172a',
                      color: '#cbd5e1',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid #334155',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={proyecto.linkGithub}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                Ver Código Fuente en GitHub →
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}