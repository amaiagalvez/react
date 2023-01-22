import React from 'react'

export function Paginate ({ page = 1, prevPage, nextPage, isLast, firstPage, lastPage }) {
  return (
    <div className='py-2'>
      {
        page > 1 &&
          <button onClick={firstPage} type='button' className='btn btn-primary mr-5'> |&lt;&lt; </button>
      }
      {
        page > 1 &&
          <button onClick={prevPage} type='button' className='btn btn-primary mr-1'> &lt;</button>
      }

      <button className='btn btn-primary m-2 rounded-1 no-cursor'> {page}</button>

      {
        !isLast &&
          <>
            <button onClick={nextPage} type='button' className='btn btn-primary mr-5'> &gt;</button>
            <button onClick={lastPage} type='button' className='btn btn-primary'> &gt;&gt;| </button>
          </>
      }
    </div>
  )
}
