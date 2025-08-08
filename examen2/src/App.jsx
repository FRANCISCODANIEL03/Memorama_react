import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Form } from './components/Form';
import { LibroFilter } from './components/LibroFilter';
import { LibroList } from './components/LibroList';
import { LibroContext } from './context/LibroContext';
import useLocalStorage from './Hooks/useLocalstorage';

function App() {

  const [libros, setlibros] = useLocalStorage('libros', []);

  const [generos, setGeneros] = useLocalStorage('generos', ['Ciencia', 'Historia', 'Tecnologia'])

  const [filter, setFilter] = useState('Todos');
  const [searchText, setSearchText] = useState('');

  const addLibro = (libro) => {
    setlibros(prev => [...prev, libro]);
  };

  const addGenero = (newGen) => {
    const cleanGen = newGen.trim();
    if (cleanGen && !generos.includes(cleanGen)) {
      setGeneros(prev => [...prev, cleanGen]);
    }
  };

  const confirmDelete = (index) => {
    toast(t => (
      <span className="flex flex-col gap-2">
        <p>¿Estás seguro de que deseas eliminar este libro?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setlibros(libros.filter((_, i) => i !== index));
              toast.dismiss(t.id);
              toast.success('Libro eliminado');
            }}
            className="bg-red-500 text-white px-2 py-1 rounded text-sm"
          >
            Eliminar
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-300 px-2 py-1 rounded text-sm"
          >
            Cancelar
          </button>
        </div>
      </span>
    ), { duration: 5000 });
  };

  const filteredLibros = libros.filter(libro => {
    const matchesCategory = filter === 'Todas' || libro.category === filter;
    const matchesSearch = libro.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <LibroContext.Provider value={{
      libros, addLibro, confirmDelete,
      generos, addGenero,
      filter, setFilter,
      searchText, setSearchText,
      filteredLibros
    }}>
      <div className='p-4'>
        <Toaster position="top-right" />
        <h1 className='text-center text-4xl font-bold'>Guarda un libro</h1>
        <Form />
        <LibroFilter />
        <LibroList />
      </div>
    </LibroContext.Provider>
  );
}

export default App;
