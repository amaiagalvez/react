import { useState } from 'react'
import { SearchForm } from './components/SearchForm'
import './App.css'
import { ImagesList } from './components/ImagesList'

function App () {
  const [filter, setFilter] = useState(null)
  const [images, setImages] = useState(null)

  const getData = (data) => {
    setFilter(data)
    fetchData(data)
  }

  const fetchData = (data) => {
    const url = `https://pixabay.com/api/?key=15343816-9870b0db29149adf58f25a37c&q=${data}&per_page=30`

    fetch(url)
      .then(response => response.json())
      .then(result => setImages(result.hits))
  }

  const cleanSearch = () => {
    setFilter(null)
    setImages(null)
    // TODO: nola garbitu formularioa?
  }

  return (
    <div className='container'>
      <div className='card mt-2 p-2 bg-secondary'>
        <div className='jumbotron'>
          <h1 className='display-4 text-center text-white'>Irudien Bilatzailea</h1>

          <SearchForm
            onSubmit={getData}
          />
        </div>
      </div>

      <div className='pt-2'>
        {
          filter && images &&
            <div>
              <h1 className='text-center'> Irudien Zerrenda</h1>
              <h5 className='text-muted'>
                <span className='pr-5'>Bilatzen ari gara:  {filter}</span>
                <span className='text-muted btn btn-sm btn-primary close-button' title='Garbitu bilaketa' onClick={cleanSearch}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='currentColor' className='bi bi-x' viewBox='0 0 16 16'>
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                  </svg>
                </span>
              </h5>
            </div>
        }
        {console.log(images)}
        {
            filter && images && images.length > 0 &&
              <div>
                <ImagesList images={images} />
              </div>
        }
      </div>

      <div className='pt-2'>
        {
          images && images.length === 0 &&
            <h5 className='text-muted'>
              <span className='pr-5'>... Ez dugu ezer aurkitu. Saiatu berriro</span>
            </h5>
        }
      </div>
    </div>
  )
}

export default App
