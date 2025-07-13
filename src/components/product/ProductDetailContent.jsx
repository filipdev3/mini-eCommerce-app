import ImageGallery from "../ui/ImageGallery";
import ProductDetailInfo from "./ProductDetailInfo";


export default function ProductDetailContent({ product }){


    return (
        <>
            <section className="product-detail-content">
                <ImageGallery product={product} />
                <ProductDetailInfo product={product}/>
            </section>
        </>
    
    )
}