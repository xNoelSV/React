
/* const getImagenPromesa = () => new Promise ( resolve => resolve('https://djshhdsd.com'));

getImagenPromesa()
  .then( console.log ) */

const getImagen = async() => {
  try {
    const apiKey = 't3EblvKoDOlcO85GKgLlBzuXdQPVNBay';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json()
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
  
    document.body.append( img )
  } catch (err) {
    console.log(err)
  }
}

getImagen()
  /* .then( ({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img )
  } ) */

  
/* const apiKey = 't3EblvKoDOlcO85GKgLlBzuXdQPVNBay';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
  .then( resp => resp.json() )
  .then( ({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
  })
  .catch( console.warn ) */