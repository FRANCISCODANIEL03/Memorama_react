import { useLibroContext } from '../context/LibroContext';

export function LibroList() {
  const { filteredLibros, confirmDelete, searchText } = useLibroContext();

  const highlightMatch = (text) => {
    if (!searchText.trim()) return text;
    const regex = new RegExp(`(${searchText})`, 'ig');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-yellow-300">{part}</mark> : part
    );
  };

  if (filteredLibros.length === 0) {
    return <p className='text-center mt-4 text-gray-600'>No hay libros para mostrar</p>;
  }

  return (
    <div className='mx-8 mt-6 space-y-4'>
      {filteredLibros.map((video, index) => (
        <div key={index} className='bg-white shadow-md rounded-lg p-4 flex justify-between items-center'>
          <div className='text-left'>
            <p className='text-lg font-bold'>{highlightMatch(video.title)}</p>
            <p className='text-sm text-gray-600'>{video.genero}</p>
          </div>
          <div className='flex items-center gap-2'>
            <button
            
              className='bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600'
            >
              Editar
            </button>
            <button
              onClick={() => confirmDelete(index)}
              className='text-red-600 text-xl'
              title="Eliminar Libro"
            >
              
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
