import { useLibroContext } from '../context/LibroContext';

export function LibroFilter() {
  const { generos, setFilter, searchText, setSearchText } = useLibroContext();

  return (
    <div className='flex flex-col md:flex-row justify-between items-center mx-8 mb-4 gap-4'>
      <div>
        <label className='mr-2 font-semibold'>Filtro:</label>
        <select onChange={(e) => setFilter(e.target.value)} className='border-b-2 border-indigo-500 p-1'>
          <option value="Todas">Todo</option>
          {generos.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar ..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='border-b-2 border-indigo-500 p-1 outline-none text-center'
        />
      </div>
    </div>
  );
}
