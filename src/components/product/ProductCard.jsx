import '../../styles/product-card.css'
import '../../index.css'
import AddToCart from '../layout/AddToCart'
import Detail from '../layout/Detail'

export default function ProductCard({ id, name, price, shortDescription, image }){

    return (
        <section className="product-card">
            <img src={image} alt="product-image" />
            <div className='product-info'>
            <h3 className="product-name">{name}</h3>
            <p className="short-desc">{shortDescription}</p>
            <p className="price">${price}</p>
            <div className="actions">
                <AddToCart product={{ id, name, price }}/>
                <Detail productId={id}/>
            </div>
            </div>
        </section>
    )

}