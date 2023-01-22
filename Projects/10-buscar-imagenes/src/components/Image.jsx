import React from 'react'

export function Image ({ image }) {
  const { largeImageURL, likes, previewURL, tags, views } = image

  return (
    <div className='col-12 col-sm-4 col-md-3 col-lg-2 mb-4'>
      <div className='card'>
        <img className='card-img-top' src={previewURL} title={tags} />
        <div className='card-body'>
          <div className='card-text'>
            <div className='left'>
              <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='currentColor' className='m-1 bi bi-star-fill' viewBox='0 0 16 16'>
                <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
              </svg>
              {likes}
            </div>
            <div className='right'>
              <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='currentColor' className='m-1 bi bi-eye' viewBox='0 0 16 16'>
                <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
              </svg>
              {views}
            </div>
          </div>
          <p style={{ color: '#FF6C6C', fontSize: '0.8rem' }}>{tags}</p>
          <div className='text-center'>
            <a href={largeImageURL} rel='noreferrer' target='_blank' className='btn btn-sm btn-primary'>
              Irudia Ireki
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
