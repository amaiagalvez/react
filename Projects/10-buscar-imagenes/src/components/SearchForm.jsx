import { React, useState } from 'react'

export function SearchForm (props) {
  const [search, setSearch] = useState(props.filter ?? '')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // si no hay nada en el input no hacer caso al botón Search
    if (search === null || search === '') return null

    props.onSubmit(search)
  }

  const cleanForm = () => {
    setSearch('')
    props.cleanSearch()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='form-group col-md-8'>
          <input
            name='search' type='text' className='form-control' placeholder='Bilatu irudia. Adibidez: Futbol' value={search}
            onChange={handleChange}
          />
        </div>

        <div className='form-group col-md-4'>
          <button type='submit' className='form-control btn btn-log btn-danger btn-block' title='Bilatu'>
            <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
            <span className='p-1'>Bilatu</span>
          </button>
        </div>

        {/* TODO:  Argitu nola egin hau */}
        {
          (search) &&
            <div className='py-2'>
              <h5 className='text-white'>
                <span className='pr-5'>Bilatzen ari gara: <i>"{search}"</i></span>
                <span className='btn btn-primary close-button mt-3' title='Garbitu bilaketa' onClick={cleanForm}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-x' viewBox='0 0 20 20'>
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                  </svg>
                </span>
              </h5>
            </div>
        }
      </div>
    </form>
  )
}
