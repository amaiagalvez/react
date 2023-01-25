// custom Hook
import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  // pasar el fact como objeto, para poder extender la fución
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    console.log('Fact: ', fact)

    if (!fact) return

    // const firstTreeWords = fact.split(' ').slice(0, 3).join(' ') // recuperar las tres primeras palabras
    // const firstTreeWordsBis = fact.split(' ', 3) // recuperar las tres primeras palabras
    const firstWord = fact.split(' ')[0] // recuperar la primera palabra

    fetch(`https://pixabay.com/api/?key=15343816-9870b0db29149adf58f25a37c&q=${firstWord}`)
      .then(res => res.json())
      .then(response => {
        if (!response.ok) return
        const newImageUrl = response.hits[0].previewURL
        setImageUrl(newImageUrl)
        console.log('newImage', newImageUrl)
      })
      .catch(error => {
        console.log(error)
      })
  }, [fact])
  // este solo se ejecutará cuando fact cambie

  return { imageUrl }
}