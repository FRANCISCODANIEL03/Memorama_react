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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!titulo.trim() || !autor.trim() || !genero.trim() || !año.trim()) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        addLibro({ titulo, autor, genero, año });
        toast.success('Libro guardado exitosamente');
        setTitulo('');
        setTitle('');
        setGenero('');
        setAño('');
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 bg-indigo-100 m-8 p-4 rounded-lg text-xl font-semibold text-center'>
            
        </form>
    );
}
