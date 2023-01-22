import React from 'react'

export function Paginate ({ page = 1, prevPage, nextPage, isLast }) {
  return (
    <div className='py-2'>
      {
        page > 1 &&
          <button onClick={prevPage} type='button' className='btn btn-primary mr-1'> &larr;</button>
      }

      <button className='btn btn-primary m-2 rounded-1 no-cursor'> {page}</button>

      {
        !isLast &&
          <button onClick={nextPage} type='button' className='btn btn-primary'> &rarr;</button>
      }

    </div>
  )
}
