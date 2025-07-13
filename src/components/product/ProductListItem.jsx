import AddToCart from '../layout/AddToCart'
import '../../styles/product-list-item.css'
import Detail from '../layout/Detail'

export default function ProductListItem({ id, name, price, shortDescription, image }){

    return (
        <section className="product-list-item">
            <div className='img-holder'>
                <img src={image} alt="product-image-list" />
            </div>
            <div className='product-info-list'>
            <h3 className="product-name-list">{name}</h3>
            <p className="short-desc-list">{shortDescription}</p>
            <p className="price-list">${price}</p>
            <div className="buttons-holder">
                <AddToCart product={{ id, name, price }}/>
                <Detail productId={id}/>
            </div>
            </div>
        </section>
    )

}