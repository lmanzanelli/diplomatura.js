import basededatos from './basededatos';

/**
 * Obtiene la lista de materias aprobadas (nota >= 4) para el nombre de alumno dado.
 * En caso de no existir el alumno, devolver undefined.
 * En caso de que no encuentre ninguna materia para el alumno, devuelve un array vacio []
 * Ejemplo del formato del resultado suponiendo que el alumno cursa dos materias y tiene mas de 4.
 *  [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
      universidad: 1,
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
      universidad: 2,
    }
  ]
 * @param {nombreAlumno} nombreAlumno
 */
export const materiasAprobadasByNombreAlumno = (nombreAlumno) => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  // console.log(basededatos.alumnos);
  let alumnos = basededatos.alumnos;
  let calificaciones = basededatos.calificaciones;
  let materias = basededatos.materias;
  let materiasAprobadasDelAlumno;
  alumnos.filter(function(alumno) {
    if(alumno.nombre ===nombreAlumno){
      materiasAprobadasDelAlumno = [];
      let materiasAprobadas =  calificaciones.filter(function(calificacion) {
        if(calificacion.alumno === alumno.id && calificacion.nota>=4){
          let materiasAprobada =  materias.filter(function(materia) {
            return materia.id ===calificacion.materia;
          }); 
          materiasAprobadasDelAlumno.push(materiasAprobada);
        }
      });
      return;
    }
  });
  return materiasAprobadasDelAlumno;
};

/**
 * Devuelve informacion ampliada sobre una universidad.
 * Si no existe la universidad con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto universidad,
 * agregar la lista de materias dictadas por la universidad y
 * tambien agrega informacion de los profesores y alumnos que participan.
 * Ejemplo de formato del resultado (pueden no ser correctos los datos en el ejemplo):
 *{
      id: 1,
      nombre: 'Universidad del Comahue',
      direccion: {
        calle: 'Av. Siempre viva',
        numero: 2043,
        provincia: 'Neuquen',
      },
      materias: [
        {
          id: 1,
          nombre: 'Análisis matemático',
          profesores: [1, 2],
          universidad: 1,
        },
        {
          id: 4,
          nombre: 'Programación orientada a objetos',
          profesores: [1, 3],
          universidad: 1,
        },
      ],
      profesores:[
        { id: 1, nombre: 'Jorge Esteban Quito' },
        { id: 2, nombre: 'Marta Raca' },
        { id: 3, nombre: 'Silvia Torre Negra' },
      ],
      alumnos: [
         { id: 1, nombre: 'Rigoberto Manchu', edad: 22, provincia: 1 },
         { id: 2, nombre: 'Alina Robles', edad: 21, provincia: 2 },
      ]
    }
 * @param {string} nombreUniversidad
 */
export const expandirInfoUniversidadByNombre = (nombreUniversidad) => {
  let universidades = basededatos.universidades;
  let materias = basededatos.materias;
  let profesores = basededatos.profesores;
  let alumnos = basededatos.alumnos;
  let calificaciones = basededatos.calificaciones;
  
  let resultado;
  universidades.filter(function(uni) {
    if(uni.nombre ===nombreUniversidad){
      resultado = uni;
      resultado.materias=[];
      resultado.profesores=[];
      resultado.alumnos=[];
      
      materias.filter(function(materia) {
          if(materia.universidad === uni.id){
            
            resultado.materias.push(materia);
            materia.profesores.filter(function(id){
                  let profe = profesores.find(function(profesor){
                      return profesor.id ===id;
                  });
                  if(resultado.profesores.indexOf(profe)===-1){
                    resultado.profesores.push(profe);
                }
            })
            
            calificaciones.filter(function(cali){
                if(cali.materia===materia.id){
                  let alumnito =alumnos.find(function(alumno){
                      return alumno.id ===cali.alumno; 
                  });
                  
                  if(resultado.alumnos.indexOf(alumnito)===-1){
                      resultado.alumnos.push(alumnito);
                  }
                }    
            });
          }
      });
  }
  });
  return JSON.stringify(resultado, null, 2);;
};

// /**
//  * Devuelve el promedio de edad de los alumnos.
//  */
// export const promedioDeEdad = () => {
//   return [];
// };

// /**
//  * Devuelve la lista de alumnos con promedio mayor al numero pasado
//  * por parametro.
//  * @param {number} promedio
//  */
// export const alumnosConPromedioMayorA = (promedio) => {
//   return [];
// };

// /**
//  * Devuelve la lista de materias sin alumnos
//  */
// export const materiasSinAlumnosAnotados = () => {
//   return [];
// };

// /**
//  * Devuelve el promdedio de edad segun el id de la universidad.
//  * @param {number} universidadId
//  */
// export const promedioDeEdadByUniversidadId = (universidadId) => {
//   return [];
// };