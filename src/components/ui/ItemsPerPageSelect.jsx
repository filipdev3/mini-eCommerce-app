import '../../styles/pagination.css'

export default function ItemsPerPageSelect({ value, onChange }) {


    return (
        <section className='items-per-page-select'>
            <label htmlFor="items-per-page">Items per page: </label>
            <select 
                name="items-per-page" 
                id="items-per-page"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
            >
                
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>

            </select>
        </section>
    )
}