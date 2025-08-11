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
}
