import './App.css'
import { useCatImage } from './hooks/UseCatImage'
import { useCatFact } from './hooks/RefreshFact'
export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  console.log(imageUrl)
  /*
 aquí no se puede hace directamente el fetching de datos
 lo que vaya aquí se ejecuta cada vez que se recarga el componente
 por eso usamos useEffect **sin dependencias** para que se ejecute solo la primera vez que se renderiza el componente (si no pongo nada se va a ejecutar siempre)
*/

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main style={{ width: '80%', display: 'flex', flexDirection: 'column', placeItems: 'center', maxWith: '800px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1> App de gatitos</h1>

      <button onClick={handleClick}>
        Cargar otra imagen
      </button>
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
        {/* {
          imageUrl &&
          <img src={imageUrl} alt={fact} />
        } */}
      </section>
    </main>
  )
}
