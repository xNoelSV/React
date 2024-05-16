import heroes, { owners } from '../data/heroes'

// console.log( owners  )

export const getHeroeById = (id) => {
  return heroes.find( heroe => heroe.id === id );
}

export const getHeroesByOwner = ( owner ) => {
  return heroes.filter( heroe => heroe.owner === owner );
}

// console.log(getHeroeById(2));
// console.log(getHeroesByOwner('DC'))
