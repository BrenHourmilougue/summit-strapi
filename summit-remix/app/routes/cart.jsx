import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/cart.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return {
        title: 'Summit - Cart',
        description: 'Store, blog'
    }
}
function Cart() {

    const [total, setTotal] = useState(0)
    const { cart, updateQuantity, deleteItem } = useOutletContext()

    useEffect(() => {
        const totalCalc = cart.reduce((total, product) => total + (product.quantity * product.price), 0)
        setTotal(totalCalc)
    }, [cart])

    return (
        <ClientOnly fallback={'Loading'}>
            {() => (

                <main className='container'>
                    <h1 className='heading'>Cart</h1>
                    <div className='content'>
                        <div className='cart'>
                            <h2>Articles</h2>
                            {cart?.length === 0 ? 'Nothing to see here...' : (
                                cart?.map(item => (
                                    <div className='product' key={item.id}>
                                        <div>
                                            <img src={item.image} alt='image' />
                                        </div>
                                        <div>
                                            <p className='name'>{item.name}</p>
                                            <p className='quantity'>Quantity:
                                                <select
                                                    className='select'
                                                    value={item.quantity}
                                                    onChange={e => updateQuantity({
                                                        quantity: parseInt(e.target.value),
                                                        id: item.id,
                                                    })}
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </p>
                                            <p className='price'>$ <span>{item.price}</span></p>
                                            <p className='subtotal'>Subtotal: $ <span>{item.quantity * item.price}</span></p>
                                        </div>
                                        <button onClick={() => deleteItem(item.id)} type='button' className='btn-delete'>X</button>
                                    </div>
                                ))
                            )}
                        </div>
                        <aside className='summary'>
                            <h3></h3>
                            <p>Total: ${total}</p>
                        </aside>
                    </div>

                </main>
            )}
        </ClientOnly>
    )
}

export default Cart
