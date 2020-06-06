import {
  materiasAprobadasByNombreAlumno,
  expandirInfoUniversidadByNombre
} from './moduloEjercicios';

import baseDeDatos from './basededatos';

// materiasAprobadasByNombreAlumno

console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios materiasAprobadasByNombreAlumno.');

const materiasAprobadasPorSuzana = materiasAprobadasByNombreAlumno(
  'Suzana Mendez'
);
console.log('Materias aprobadas por Suzana:', materiasAprobadasPorSuzana);

const materiasAprobadasPorAlina = materiasAprobadasByNombreAlumno(
  'Alina Robles'
);
console.log('Materias aprobadas por Alina:', materiasAprobadasPorAlina);

const materiasAprobadasPorMatias = materiasAprobadasByNombreAlumno(
  'Matias Manzanelli'
);
console.log('Materias aprobadas por Matias:', materiasAprobadasPorMatias);

const materiasAprobadasPorPablo = materiasAprobadasByNombreAlumno(
  'Pablo Tomafi'
);
console.log('Materias aprobadas por Pablo:', materiasAprobadasPorPablo);


// expandirInfoUniversidadByNombre
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios expandirInfoUniversidadByNombre.');

const infoUniversidadComahue = expandirInfoUniversidadByNombre(
  'Universidad del Comahue'
);
console.log('Info comahue:', infoUniversidadComahue);

const infoUniversidadRio = expandirInfoUniversidadByNombre(
  'Universidad de Rio Negro'
);
console.log('Info rio negro:', infoUniversidadRio);

const infoUniversidadSalvador = expandirInfoUniversidadByNombre(
  'Universidad del Salvador'
);
console.log('Info Salvador:', infoUniversidadSalvador);

/*
const infoPromedioDeEdad = promedioDeEdad();
console.log('Promedio Edad:', infoPromedioDeEdad);

const infoAlumnosConPromedioMayorA = alumnosConPromedioMayorA(9);
console.log('Promedio mayor a :'+ 4, infoAlumnosConPromedioMayorA);
*/
