import React from 'react'
import { Image } from './Image'
import { Paginate } from './Paginate'

export function ImagesList ({ images, page, prevPage, nextPage, isLast }) {
  return (
    <>
      <div className='col-12 p-4 row'>
        {
          images && images.map(image => (
            <Image
              key={image.id}
              image={image}
            />
          ))
        }
      </div>

      <div className='text-center'>
        <Paginate
          page={page}
          prevPage={prevPage}
          nextPage={nextPage}
          isLast={isLast}
        />
      </div>
    </>
  )
}
