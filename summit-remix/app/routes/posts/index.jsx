import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import PostList from '~/components/post-list'

export function meta(){
    return (
        {
            title: 'Summit - Blog'
        }
    )
}

export async function loader(){
  const posts = await getPosts()
  console.log(posts)

  return posts.data
}

function Blog() {

  const posts = useLoaderData();

  return (  
    <PostList 
      posts = {posts}
    />      
  )
}

export default Blog
