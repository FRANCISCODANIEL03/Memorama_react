import { useVideoContext } from '../context/VideoContext';

export function VideoList() {
  const { filteredVideos, confirmDelete, searchText } = useVideoContext();

  const highlightMatch = (text) => {
    if (!searchText.trim()) return text;
    const regex = new RegExp(`(${searchText})`, 'ig');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-yellow-300">{part}</mark> : part
    );
  };

  if (filteredVideos.length === 0) {
    return <p className='text-center mt-4 text-gray-600'>No hay links para mostrar</p>;
  }

  return (
    <div className='mx-8 mt-6 space-y-4'>
    </div>
  );
}
