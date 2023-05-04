import React from 'react'
import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatDate } from '~/utils/helpers'

export function meta({data}){

    if(!data){
        return{
            title: 'Post not found',
            description:`products, blog, ${data.data[0].attributes.title}`
        }
    }
    return{
        title: `Summit - ${data.data[0].attributes.title}`,
        description:`products, blog, post not found`
    }
}

export async function loader({params}){
    const {postUrl} = params

    const post = await getPost(postUrl)

    if (post.data.length === 0){
        throw new Response('',{
            status:404,
            statusText: 'Post not found'
        })
    }

    return post
}

function Post() {

    const post = useLoaderData()
    const { title, content, image, date} = post?.data[0]?.attributes

  return (
    <article className='post mt-3'>
      <img className='image' src={image?.data?.attributes.url} alt="" />
        <div className='content'>
            <h3>{title}</h3>
            <p className='date'>{formatDate(date) }</p>
            <p className='text'>{content}</p>
        </div>
    </article>
  )
}

export default Post
