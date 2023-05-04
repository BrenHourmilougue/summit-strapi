import React from 'react'
import Post from './post'

function PostList({posts}) {
  return (
    <div>
      <h2 className="heading">Blog</h2>
      <div className='posts'>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </div>
  )
}

export default PostList
