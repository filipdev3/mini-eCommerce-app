import '../../styles/search-view-toggle.css'
import Search from './SearchBar'

export default function ViewToggle({ onChange }){
    return (    
            <div className="toggle-view">
                <button className="grid-btn" onClick={() => onChange('grid')}>
                    <img src={`${import.meta.env.BASE_URL}/grid_32.png`} alt="grid-icon" />
                </button>
                <button className="list-btn" onClick={() => onChange('list')}>
                    <img src={`${import.meta.env.BASE_URL}/list_32.png`} alt="list-icon" />
                </button>
            </div>
    )
}