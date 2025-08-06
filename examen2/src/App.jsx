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
        </div>
      </span>
    ), { duration: 5000 });
  };

}

export default App;
