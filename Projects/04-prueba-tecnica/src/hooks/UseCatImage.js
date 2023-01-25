import { useEffect, useState } from 'react'
import { CAT_PREFIX_IMAGE_URL } from '../services/const'

export function useCatImage({ fact }) {
  // pasar el fact como objeto, para poder extender la fución
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    // const firstTreeWords = fact.split(' ').slice(0, 3).join(' ') // recuperar las tres primeras palabras
    // const firstTreeWordsBis = fact.split(' ', 3) // recuperar las tres primeras palabras
    const firstWord = fact.split(' ')[0] // recuperar la primera palabra

    fetch(`${CAT_PREFIX_IMAGE_URL}${firstWord}`)
      .then(res => res.json())
      .then(response => {
        const newImageUrl = response.hits[0].previewURL
        if (newImageUrl) {
          setImageUrl(newImageUrl)
        }
      })
      .catch(error => {
        console.log(error)
        return null
      })
  }, [fact])
  // este solo se ejecutará cuando fact cambie

  //return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }

  return { imageUrl }

}