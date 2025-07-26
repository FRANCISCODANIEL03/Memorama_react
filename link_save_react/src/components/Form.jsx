import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useVideoContext } from '../context/VideoContext';

export function Form() {
    const {
        addVideo,
        addCategory,
        categories
    } = useVideoContext();

    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [loadingTitle, setLoadingTitle] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!url.trim() || !title.trim() || !category.trim()) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        addVideo({ url, title, category });
        toast.success('Video guardado exitosamente');
        setUrl('');
        setTitle('');
        setCategory('');
    };

    const fetchTitleFromURL = async (videoURL) => {
        if (!videoURL.trim()) return;

        setLoadingTitle(true);

        // Detecta el dominio
        const urlObj = new URL(videoURL);
        const hostname = urlObj.hostname;

        let endpoint = '/fetch-title'; // endpoint por defecto

    };


}
