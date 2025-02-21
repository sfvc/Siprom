import React from 'react';

// A reusable button list component
const ButtonList = ({ buttons, onSelectComponent }) => (
    <ul className="main-buttons__list">
      {buttons.map(({ label, action }, index) => (
        <li key={index} className="main-buttons__item">
          <button className="main-buttons__button" onClick={() => onSelectComponent(action)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
);

const HomeMainBtns = ({ selectedSection, onSelectComponent }) => {
  const buttonSections = {
    informacionGeneral: [
      { label: 'Inicio', action: 'InfoInicio' },
      { label: 'Tutoriales', action: 'InfoTutoriales' },
      { label: 'Preguntas Frecuentes', action: 'PreguntasFrecuentes' },
      { label: 'Inicio', action: 'Inicio' },
      { label: 'Inicio', action: 'Inicio' }
    ],
    proveedores: [
      { label: 'Registro Proveedor', action: 'RegistroProveedor' },
      { label: 'Consultar Registro', action: 'ConsultarRegistro' },
      { label: 'Ingreso Prov Registrado', action: 'IngresoProvRegistrado' }
    ],
    consultasPublicas: [
      { label: 'Padron Proveedores', action: 'PadronProveedores' },
      { label: 'Padron Rubro', action: 'PadronRubro' },
      { label: 'Proveedores por Rubro', action: 'ProveedoresPorRubro' }
    ]
  };

  return (
    <div className="main-buttons">
      {selectedSection && buttonSections[selectedSection] && (
        <ButtonList buttons={buttonSections[selectedSection]} onSelectComponent={onSelectComponent} />
      )}
    </div>
  );
};

export default HomeMainBtns;
