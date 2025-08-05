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

}

export default App;
