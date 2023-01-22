import React from 'react'
import { Image } from './Image'

export function ImagesList ({ images }) {
  return (
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
  )
}
