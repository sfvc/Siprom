import React from 'react';

const InfoTutoriales = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Tutoriales</h1>

      <section>
        <h2>Guía Registro Proveedor</h2>
        <p>
          Para realizar el registro como proveedor, siga los pasos indicados en el documento a continuación.
        </p>
        <a href="/ruta-a-pdf-registro-proveedor" target="_blank" rel="noopener noreferrer">
          Descargar Guía Registro Proveedor (PDF)
        </a>
      </section>

      <section>
        <h2>Guía de Uso de Compras OnLine - Realizar Cotizaciones</h2>
        <p>
          Aprenda a utilizar el sistema de compras online para realizar cotizaciones de manera efectiva.
        </p>
        <a href="/ruta-a-pdf-guia-cotizaciones" target="_blank" rel="noopener noreferrer">
          Descargar Guía de Cotizaciones (PDF)
        </a>
      </section>

      <section>
        <h2>Video Tutorial: Cómo Realizar Cotizaciones</h2>
        <p>
          A continuación, puede ver un video tutorial explicando cómo realizar cotizaciones a través de nuestro sistema.
        </p>
        <video width="600" controls>
          <source src="/ruta-al-video-tutorial.mp4" type="video/mp4" />
          Su navegador no soporta el elemento de video.
        </video>
      </section>

      <section>
        <h2>Unificar Varios Archivos PDF en Uno Solo</h2>
        <p>
          Si desea unificar varios archivos PDF en uno solo, puede usar herramientas disponibles en línea. Aquí le mostramos cómo hacerlo:
        </p>
        <a href="/ruta-a-pdf-unificar-archivos" target="_blank" rel="noopener noreferrer">
          Descargar Guía para Unificar Archivos PDF (PDF)
        </a>
      </section>
    </div>
  );
};

export default InfoTutoriales;
