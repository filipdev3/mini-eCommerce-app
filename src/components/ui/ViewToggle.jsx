import '../../styles/search-view-toggle.css'
import Search from './SearchBar'

export default function ViewToggle({ onChange }){
    return (    
            <div className="toggle-view">
                <button className="grid-btn" onClick={() => onChange('grid')}>
                    <img src="grid_32.png" alt="" />
                </button>
                <button className="list-btn" onClick={() => onChange('list')}>
                    <img src="list_32.png" alt="" />
                </button>
            </div>
    )
}