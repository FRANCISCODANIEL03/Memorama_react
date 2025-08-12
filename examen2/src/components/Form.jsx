import { useState } from 'react';
import toast from 'react-hot-toast';
import { useLibroContext } from '../context/LibroContext';

export function Form() {
    const {
        addLibro,
        addGenero,
        generos
    } = useLibroContext();

    const [titulo, setTitulo] = useState('');
    const [autor, setTitle] = useState('');
    const [genero, setGenero] = useState('');
    const [año, setAño] = useState('');
    const [showNewGeneroInput, setShowNewGeneroInput] = useState(false);
    const [newGenero, setNewGenero] = useState('');

}
