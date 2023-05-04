import { useLoaderData } from '@remix-run/react'
import { getProducts } from '~/models/products.server'
import { getPosts } from '~/models/posts.server'
import { getWelcome } from '~/models/welcome.server'
import ProductList from '~/components/product-list'
import PostList from '~/components/post-list'
import Welcome from '~/components/welcome'
import stylesProducts from '~/styles/products.css'
import stylesPosts from '~/styles/posts.css'
import stylesWelcome from '~/styles/welcome.css'

export function meta(){

}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesProducts,
    },
    {
      rel:'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesWelcome,
    }
  ]
}

export async function loader(){

  const [products, posts, welcome] = await Promise.all([
    getProducts(),
    getPosts(),
    getWelcome()
  ])

  return {
    products : products.data, 
    posts : posts.data,
    welcome: welcome.data
  }
}

export default function Index() {

  const { products, posts, welcome } = useLoaderData()

  return (
    <>
      <main className='container'>
        <ProductList
          products = {products}
        />        
      </main>
      <Welcome 
        welcome={welcome.attributes}
      />
      <section className='container'>
          <PostList 
            posts = {posts}
          />
      </section>
    </>
  );
}
