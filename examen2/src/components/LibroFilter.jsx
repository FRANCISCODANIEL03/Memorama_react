import { useLibroContext } from '../context/LibroContext';

export function LibroFilter() {
  const { generos, setFilter, searchText, setSearchText } = useLibroContext();

  return (
    <div className='flex flex-col md:flex-row justify-between items-center mx-8 mb-4 gap-4'>
    </div>
  );
}
