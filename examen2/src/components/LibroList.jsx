import { useLibroContext } from '../context/LibroContext';

export function LibroList() {
  const { filteredLibros, confirmDelete, searchText } = useLibroContext();

}
