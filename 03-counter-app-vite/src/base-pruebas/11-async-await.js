export const getImagen = async() => {

    try {

        // const apiKey = 'qmTTeRq8u2s852eDD4M224uuzrOUlVBu';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No se encontro la imagen'
    }
}

 getImagen();



