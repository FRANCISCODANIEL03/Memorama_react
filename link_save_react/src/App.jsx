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

  const addVideo = (video) => {
    setVideos(prev => [...prev, video]);
  };

  const addCategory = (newCat) => {
    const cleanCat = newCat.trim();
    if (cleanCat && !categories.includes(cleanCat)) {
      setCategories(prev => [...prev, cleanCat]);
    }
  };

  const confirmDelete = (index) => {
    toast(t => (
      <span className="flex flex-col gap-2">
        <p>¿Estás seguro de que deseas eliminar este link?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setVideos(videos.filter((_, i) => i !== index));
              toast.dismiss(t.id);
              toast.success('Video eliminado');
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

  const filteredVideos = videos.filter(video => {
    const matchesCategory = filter === 'Todas' || video.category === filter;
    const matchesSearch = video.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <VideoContext.Provider value={{
      videos, addVideo, confirmDelete,
      categories, addCategory,
      filter, setFilter,
      searchText, setSearchText,
      filteredVideos
    }}>
    </VideoContext.Provider>
  );
}

export default App;
