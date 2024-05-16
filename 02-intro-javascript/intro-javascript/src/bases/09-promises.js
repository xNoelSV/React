import { getHeroeById } from "./bases/08-imp-exp";

/* const promesa = new Promise(( resolve, reject ) => {
  setTimeout(() => {
    // TAREA
    const heroe = getHeroeById(3);
    //console.log('2 segundos después')
    // resolve(heroe);
    reject( 'No se pudo encontrar el héroe' );
  }, 2000 );
});

promesa
  .then((heroe) => console.log('heroe', heroe))
  .catch(err => console.warn( err )) */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TAREA
      const heroe = getHeroeById(id);
      //console.log('2 segundos después')
      if (heroe === undefined) return reject( 'No se pudo encontrar el héroe' );
      else return resolve(heroe);
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then( console.log )
  .catch ( console.warn )
