import { Link } from '@remix-run/react'
import React from 'react'
import { formatDate } from '~/utils/helpers'

function Post({post}) {

    const {title, content, image, url, date} = post

  return (

      <article className='post'>
        <img className='image' src={image.data.attributes.url} alt="" />
        <div className='content'>
            <h3>{title}</h3>
            <p className='date'>{formatDate(date) }</p>
            <p className='summary'>{content}</p>
            <Link className='link' to={`/posts/${url}`}>Read more</Link>
        </div>
      </article>

  )
}

export default Post