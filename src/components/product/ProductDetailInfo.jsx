import '../../styles/detail-page.css';
import AddToCart from '../layout/AddToCart';

export default function ProductDetailInfo({ product }){
    
    return(
        <div className="product-info">
            <p className="label">Name:</p>
            <h3 className="prod-name">{product.name}</h3>

            <p className="label">Description:</p>
            <p className="full-description">{product.fullDescription}</p>

            <p className="label">Specifications: </p>
            <table className="tech-specs">
                <tbody>
                    {
                        Object.entries(product.technicalSpecifications).map(([key, value], index) => (
                            <tr className="tech-specs-row" key={index}>
                                <td className="key">{key}:</td>
                                <td className="value">{value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            
                <p className='prod-price'>Price: <strong>${product.price}</strong></p>
                <AddToCart product={product}/>
            
        </div>
    )

}