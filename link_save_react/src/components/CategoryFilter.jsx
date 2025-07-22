import { useVideoContext } from '../context/VideoContext';

export function CategoryFilter() {
  const { categories, setFilter, searchText, setSearchText } = useVideoContext();

  return (
    <div className='flex flex-col md:flex-row justify-between items-center mx-8 mb-4 gap-4'>
      <div>
      </div>
    </div>
  );
}
