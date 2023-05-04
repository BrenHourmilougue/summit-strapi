import { useState, useEffect } from "react";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import styles from '~/styles/index.css'
import Header from "~/components/Header";
import Footer from "~/components/footer";

export const meta = () => ({
  charset: "utf-8",
  title: "Summit - Remix",
  viewport: "width=device-width,initial-scale=1",
});

export function links(){
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Outfit:wght@400;700;900&family=Rubik+Iso&display=swap",
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

export default function App() {

  const cartLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cart')) || []
  const [ cart, setCart ] = useState(cartLS)

  useEffect(() => {
    if(typeof window !== 'undefined'){
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    
  }, [cart])

  const addToCart = item => {
    if (cart.some(itemState => itemState.id === item.id)){
      const updatedCart = cart.map( itemState => {
        if (itemState.id === item.id){
          itemState.quantity += item.quantity
        }
        return itemState
      })
      setCart (updatedCart)
    }else{
      setCart([...cart, item])
    }
  }

  const updateQuantity = item => {
   const updatedCart = cart.map (itemState => {
    if (itemState.id === item.id){
      itemState.quantity = item.quantity
    }
    return itemState
   })
   setCart(updatedCart)
  }

  const deleteItem = id =>{
    const updatedCart = cart.filter( itemState => itemState.id !== id)
    setCart(updatedCart)
  }

  return (
    <Document>
      <Outlet
        context={{
          addToCart,
          updateQuantity,
          deleteItem,
          cart,
        }}
      />
    </Document>
  );
}

function Document({children}){
  return (
    <html lang="es">
      <head>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}

export function CatchBoundary(){
  const error = useCatch()
  return(
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link className='error-link' to='/'>Back home</Link>
    </Document>
  )
}

export function ErrorBoundary({error}){
  return(
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link className='error-link' to='/'>Back home</Link>
    </Document>
  )
}