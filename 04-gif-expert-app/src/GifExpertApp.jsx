import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gifs */}
      <ol>
        {/* Gif Item */}
        {
          categories.map( category => {
            return <li key={category}>{ category }</li>
          } )
        }
      </ol>
    </>
  )
}
