import ProductCard from '../components/product/ProductCard';
import ProductListItem from '../components/product/ProductListItem';
import productData from '../data/products.json'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import ViewToggle from '../components/ui/ViewToggle';
import SearchBar from '../components/ui/SearchBar';
import SortSelect from '../components/ui/SortSelect';
import ItemsPerPageSelect from '../components/ui/ItemsPerPageSelect';


export default function ProductListingPage(){

    // state variable to store information from products.json
    const [products, setProducts] = useState([]);

    // state variable to store view
    const [view, setView] = useState('grid');

    // state variable to store search inputs
    const [searchTerm, setSearchTerm] = useState('');

    // state variable for sorting
    const [sortOption, setSortOption] = useState('');

    // state variable for currentPage (pagination)
    const[currentPage, setCurrentPage] = useState(1);

    // state variable for items per page (pagination)
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [isLoading, setIsLoading] = useState(false);

    // pull in products info and and store it in products state variable
    useEffect(() => {
        setIsLoading(true)
        setProducts(productData)
        setIsLoading(false)
    },[productData])

    useEffect(() => {
        setCurrentPage(1);
    },[itemsPerPage, searchTerm])


    // PAGINATION 

    // lastIndex
    const lastIndex = currentPage * itemsPerPage;

    // first index
    const firstIndex = lastIndex - itemsPerPage;

    // items 
    const items = products.slice(firstIndex, lastIndex);

    // number of pages 
    const nPages = Math.ceil(products.length / itemsPerPage);

    // numbers 
    const numbers = [...Array(nPages + 1).keys()].slice(1);

    // create page number items 
    const pageNumberElements = numbers.map((n, i) => (
        <li className={clsx('page-item', {'active': currentPage === n})} key={i}>
            <a href="#" className='page-link' onClick={() => changeCurrPage(n)}>
                {n}
            </a>
        </li>
    ))

    // FUNCTIONS FOR PAGINATION (CHANGE PAGE)
    const prevPage = () => (
        setCurrentPage(prevCurrentPage => prevCurrentPage !== 1 ? prevCurrentPage - 1 : prevCurrentPage)
    )

    const nextPage = () => (
        setCurrentPage(prevCurrentPage => prevCurrentPage !== nPages ? prevCurrentPage + 1 : prevCurrentPage)
    )

    const changeCurrPage = (id) => (
        setCurrentPage(id)
    )
    

    // varible for display products by mapping over it
    let filteredProducts = items.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // switch statement for sorting products 
    filteredProducts = filteredProducts.sort((a, b) => {
        switch(sortOption){
            case 'a-z':
                return a.name.localeCompare(b.name);
            case 'z-a': 
                return b.name.localeCompare(a.name);
            case 'low-high': 
                return a.price - b.price;
            case 'high-low':
                return b.price - a.price;
            default: 
                return 0;
            
        }
    })

    // Conditionally create component elements based of value of "view" state
    const productElements = filteredProducts.map(product => (
        view === 'grid' ?
            <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            shortDescription={product.shortDescription}
            image={`${import.meta.env.BASE_URL}${product.images[0]}`}
            />
        :

        <ProductListItem 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            shortDescription={product.shortDescription}
            image={`${import.meta.env.BASE_URL}${product.images[0]}`}
        />

    ))


    return(
        <>
            <Header />

            <section className='search-toggle-view-section'>
                <SearchBar onSearch={setSearchTerm} productsFound={filteredProducts.length}/>

                <ViewToggle onChange={setView}/>

                <SortSelect sortOption={sortOption} onChange={setSortOption}/>

                <ItemsPerPageSelect 
                    value={itemsPerPage} 
                    onChange={(value) => {
                        setItemsPerPage(value);
                        setCurrentPage(1);
                    }}
                />

            </section>
                
                
    
            {
                products.length > 0
                
                ?

                <main className={clsx(
                {'product-cards-section' : view === 'grid'},
                {'product-list-section' : view === 'list'}
            )}>

                {
                    isLoading 
                    ?
                    <p>Loading products...</p>
                    :
                    productElements
                }
                
            </main>

            : 

            <p style={{height: '250px', display: 'flex', alignItems: 'center'}}>We currently have no products available.</p>

            }

            

            <nav className='pagination'>
                    <li className='page-item'>
                        <a href="#" className='page-link' onClick={prevPage}>
                            Prev
                        </a>
                    </li>
                    
                    {pageNumberElements}

                    <li className='page-item'>
                        <a href="#" className='page-link' onClick={nextPage}>
                            Next
                        </a>
                    </li>
                </nav>
            
            <Footer />
        </>
    )
}