import React from 'react';

export default function Hero() {
    return (
        <section id="sobre-mi" style={{ padding: '60px 0', borderBottom: '1px solid #334155' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'stretch' }}>

                {/* Columna Principal: Perfil Técnico Directo */}
                <div style={{ flex: '2', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0 0 10px 0', color: '#f8fafc' }}>
                        Desarrollador <span style={{ color: '#38bdf8' }}>Full Stack Junior</span>
                    </h1>
                    <p style={{ fontSize: '16px', color: '#64748b', margin: '0 0 25px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Enfoque: Arquitectura de APIs • Interfaces Dinámicas • Lógica de Datos
                    </p>

                    <div style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.6' }}>
                        <p style={{ margin: '0 0 15px 0' }}>
                            Desarrollador orientado a resultados con una base sólida en lógica de programación y flujos de datos. Capacidad para trabajar tanto en el desarrollo de interfaces de usuario interactivas con **React** como en la estructuración de servicios del lado del servidor.
                        </p>
                        <p style={{ margin: '0 0 25px 0' }}>
                            Foco actual en la creación de aplicaciones eficientes, consumo y diseño de APIs RESTful, y gestión de bases de datos relacionales y no relacionales. Competente en la automatización de tareas y scripts de sistema en entornos locales.
                        </p>
                    </div>

                    {/* Botones de acción técnica */}
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="#proyectos" style={{ backgroundColor: '#38bdf8', color: '#0f172a', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' }}>
                            Ver Proyectos
                        </a>
                        <a href="mailto:alarconv7474@gmail.com" style={{ border: '1px solid #475569', color: '#f8fafc', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' }}>
                            Contacto Directo
                        </a>
                    </div>
                </div>

                {/* Columna Derecha: Resumen Ejecutivo / Metadatos del Perfil */}
                <div style={{ flex: '1', minWidth: '260px', backgroundColor: '#1e293b', padding: '25px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <h3 style={{ fontSize: '16px', margin: '0 0 20px 0', color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
                            Especificaciones
                        </h3>

                        <div style={{ marginBottom: '15px' }}>
                            <span style={{ color: '#64748b', display: 'block', fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold' }}>Ubicacion</span>
                            <span style={{ color: '#cbd5e1', fontSize: '14px' }}>Lima, Perú</span>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <span style={{ color: '#64748b', display: 'block', fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold' }}>Entorno de Trabajo</span>
                            <span style={{ color: '#cbd5e1', fontSize: '14px' }}>Windows OS / Terminal Git Bash / Herramientas de Desarrollo</span>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <span style={{ color: '#64748b', display: 'block', fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold' }}>Disponibilidad</span>
                            <span style={{ color: '#cbd5e1', fontSize: '14px' }}>Remoto / Presencial</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '15px' }}>
                        <a href="https://github.com/alarconv-dev" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>
                            🗂️ GitHub Perfil →
                        </a>
                        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>
                            💼 LinkedIn Perfil →
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}