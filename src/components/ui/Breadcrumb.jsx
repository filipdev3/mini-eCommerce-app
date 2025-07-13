import '../../styles/breadcrumb.css'
import { Link } from 'react-router-dom';

export default function Breadcrumb({ prodID }){

    return (
        <nav className="breadcrumb">
            <Link className="link" to="/">Products</Link> &gt; <span>Product: {prodID}</span>
        </nav>
    )
}