import '../../styles/sort-select.css'

export default function SortSelect({ sortOption, onChange }) {
  return (
    <div className="sort-select">
      <label htmlFor="sortOption">Sort by:</label>
      <select
        id="sortOption"
        value={sortOption}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Default</option>
        <option value="a-z">Name A → Z</option>
        <option value="z-a">Name Z → A</option>
        <option value="low-high">Price Low → High</option>
        <option value="high-low">Price High → Low</option>
      </select>
    </div>
  );
}