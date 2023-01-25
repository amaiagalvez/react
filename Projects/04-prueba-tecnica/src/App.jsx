import { useEffect, useState } from "react"
import './App.css'

export function App() {
  // para tener un Estado de la aplicación
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const URL_CAT_FACTS = 'https://catfact.ninja/fact'

  /*
   aquí no se puede hace directamente el fetching de datos
   lo que vaya aquí se ejecuta cada vez que se recarga el componente
   por eso usamos useEffect **sin dependencias** para que se ejecute solo la primera vez que se renderiza el componente (si no pongo nada se va a ejecutar siempre)
  */

  useEffect(() => {
    // useEffect es una función asíncrona (no se puede usar async away, habría que poner dentro una async function getRandomData() dentro)
    // fetch - devuelta una promesa, obtenemos la respuesta y cogemos lo que nos hace falta del json actualizando el estado
    fetch(URL_CAT_FACTS)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        // const firstTreeWords = fact.split(' ').slice(0, 3).join(' ') // recuperar las tres primeras palabras
        // const firstTreeWordsBis = fact.split(' ', 3) // recuperar las tres primeras palabras
        const firstWord = fact.split(' ')[0] // recuperar la primera palabra

        // setFact(firstWord)
        setFact(fact)

        fetch(`https://pixabay.com/api/?key=15343816-9870b0db29149adf58f25a37c&q=${firstWord}`)
          .then(res => res.json())
          .then(response => {
            setImageUrl(response.hits[0].previewURL)
          })
      })
  }, [])
  // solo poner dependencias que pueden cambiar, entonces se ejecutará cada vez que cambie la dependencia

  return (
    <main style={{ width: '80%', display: 'flex', flexDirection: 'column', placeItems: 'center', maxWith: '800px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1> App de gatitos</h1>
      {
        // renderizado condicional, solo si fact tiene algo
        fact &&
        <p> {fact} </p>
      }
      {
        imageUrl &&
        <img src={imageUrl} alt={fact} />
      }

      <hr />

      <section>
        {
          // renderizado condicional, solo si fact tiene algo
          fact &&
          <p> {fact} </p>
        }
        {
          imageUrl &&
          <img src={imageUrl} alt={fact} />
        }
      </section>
    </main>


  )
}
