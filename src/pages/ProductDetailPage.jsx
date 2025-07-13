import Breadcrumb from '../components/ui/Breadcrumb';
import productData from '../data/products.json'
import { useParams } from "react-router-dom"
import '../styles/detail-page.css'
import ProductDetailContent from '../components/product/ProductDetailContent';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function ProductDetailPage(){

    // take dinamically added id for certain product
    const { id } = useParams();

    // find product in productData by that id
    const product = productData.find(p => p.id === id);

    if(!product) {
        return <p>Product not found...</p>
    }
    

    return (
        <>
            <Header />
            <main className='product-detail-page'>
                <Breadcrumb prodID={product.id}/>
                <ProductDetailContent product={product}/>
            </main>
            <Footer />
        </>
    )
}