import { useVideoContext } from '../context/VideoContext';

export function CategoryFilter() {
  const { categories, setFilter, searchText, setSearchText } = useVideoContext();

  return (
    <div className='flex flex-col md:flex-row justify-between items-center mx-8 mb-4 gap-4'>
      <div>
        <label className='mr-2 font-semibold'>Filtrar por categoría:</label>
        <select onChange={(e) => setFilter(e.target.value)} className='border-b-2 border-indigo-500 p-1'>
          <option value="Todas">Todas</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
