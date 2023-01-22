import { useState } from 'react'
import { SearchForm } from './components/SearchForm'
import './App.css'
import { ImagesList } from './components/ImagesList'
import { saveSearchToStorage, getSearchStorage } from './storage/storage'

function App () {
  const PER_PAGE = 12

  const [filter, setFilter] = useState(null)
  const [images, setImages] = useState(null)
  const [page, setPage] = useState(1)
  const [history, setHistory] = useState(getSearchStorage())

  const reloadSearch = (item) => {
    setFilter(item)
    getData(item)
  }

  const getData = (data) => {
    setFilter(data)
    setPage(1)
    fetchData(data)
    setHistory(saveSearchToStorage(data))
  }

  const fetchData = (data, page = 1) => {
    const url = `https://pixabay.com/api/?key=15343816-9870b0db29149adf58f25a37c&q=${data}&per_page=${PER_PAGE}&page=${page}`

    fetch(url)
      .then(response => response.json())
      .then(result => setImages(result))

    scroll()
  }

  const cleanSearch = () => {
    setFilter(null)
    setImages(null)
    setPage(1)
    setHistory(getSearchStorage())

    // cleanStorage()
    // TODO: nola garbitu formularioa?
  }

  const prevPage = () => {
    let newPage = page
    if (page > 1) {
      newPage = page - 1
    }

    setPage(newPage)

    fetchData(filter, newPage)
  }

  const nextPage = () => {
    let newPage = page

    if (images && page >= calculateTotalPageNumber()) return null

    newPage = page + 1

    setPage(newPage)

    fetchData(filter, newPage)
  }

  const firstPage = () => {
    setPage(1)
    fetchData(filter, 1)
  }

  function calculateTotalPageNumber () {
    let totalPages = parseInt(images.totalHits / PER_PAGE)
    if (images.totalHits / PER_PAGE > 0) {
      totalPages++
    }

    return totalPages
  }

  const lastPage = () => {
    const totalPages = calculateTotalPageNumber()

    setPage(totalPages)
    fetchData(filter, totalPages)
  }

  const scroll = () => {
    const elem = document.querySelector('.jumbotron')
    elem.scrollIntoView(true)
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
          (filter === null || filter === '') &&
            <div>
              <h3 className='mt-5 text-center'> Bilaketa bat egin goiko formularioan edo ikusi historiala</h3>
              <div className='text-center'>
                {
                  history.flatMap((item) => (
                    // para que no se cargue cada vez que se renderiza la página y poder pasarle parametros
                    <button className='btn btn-sm btn-secondary m-2 p-2 rounded-1' onClick={(e) => reloadSearch(item[0])} key={item[0]}>
                      <strong>{item[0]}:</strong> {item[1]}
                    </button>
                  )
                  )
                }
              </div>
            </div>
        }
      </div>

      <div className='pt-2'>
        {
          filter && images &&
            <div>
              <h5 className='text-muted'>
                <span className='pr-5'>Bilatzen ari gara: <i>"{filter}"</i> [{images.totalHits} irudi]</span>
                <span className='text-muted btn btn-sm btn-primary close-button' title='Garbitu bilaketa' onClick={cleanSearch}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='currentColor' className='bi bi-x' viewBox='0 0 16 16'>
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                  </svg>
                </span>
              </h5>
            </div>
        }
        {
            filter && images && images.hits.length > 0 &&
              <div className='row justify-content-center'>
                <ImagesList
                  images={images && images.hits}
                  page={page}
                  prevPage={prevPage}
                  nextPage={nextPage}
                  isLast={images && page >= calculateTotalPageNumber()}
                  firstPage={firstPage}
                  lastPage={lastPage}
                />
              </div>
        }
      </div>

      <div className='pt-2'>
        {
          images && images.hits.length === 0 &&
            <h5 className='text-muted'>
              <span className='pr-5'>... Ez dugu ezer aurkitu. Saiatu berriro</span>
            </h5>
        }
      </div>
    </div>
  )
}

export default App
