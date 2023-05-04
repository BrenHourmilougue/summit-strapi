import { Link, useLocation } from "@remix-run/react"
import cartImg from '../../public/img/cart.png'

function Navigation() {

  const location = useLocation();
  
  return (
    <nav className='navigation'>
                <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
                <Link className={location.pathname === '/aboutUs' ? 'active' : ''} to="/aboutUs">About us</Link>
                <Link className={location.pathname === '/products' ? 'active' : ''} to="/products">Store</Link>
                <Link className={location.pathname === '/posts' ? 'active' : ''} to="/posts">Blog</Link>
                <Link to="/cart"><img src={cartImg} alt="cart"/></Link>
            </nav>
  )
}

export default Navigation
