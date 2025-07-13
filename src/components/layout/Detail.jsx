import { useNavigate } from 'react-router-dom'
import '../../styles/detail.css'

export default function Detail({ productId }){

    const navigate = useNavigate();

    const goToDetails = () => {
        navigate(`/product/${productId}`)
    }

    return (
        <button className="details-btn" onClick={goToDetails}>
            <img src="info.png" alt="" />
        </button>
    )
}