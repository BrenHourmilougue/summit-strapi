import { Link } from "@remix-run/react"

export default function Product({ product }) {

    const { description, image, price, url, name } = product

    return (
        <div className="product">
            <img src={image.data.attributes.url} alt="" />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
                
                <Link className="link" to={`/products/${url}`}>See product</Link>
            </div>
        </div>
    )
}