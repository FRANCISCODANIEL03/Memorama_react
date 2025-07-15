import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Form } from './components/Form';
import { CategoryFilter } from './components/CategoryFilter';
import { VideoList } from './components/VideoList';
import { VideoContext } from './context/VideoContext';
import useLocalStorage from './Hooks/useLocalstorage';

function App() {

  const [videos, setVideos] = useLocalStorage('videos', []);

  const [categories, setCategories] = useLocalStorage('categories', ['Programacion', 'Diseño', 'Musica'])

  const [filter, setFilter] = useState('Todas');
  const [searchText, setSearchText] = useState('');

}

export default App;
