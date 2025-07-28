import { useVideoContext } from '../context/VideoContext';

export function VideoList() {
  const { filteredVideos, confirmDelete, searchText } = useVideoContext();

  const highlightMatch = (text) => {
    if (!searchText.trim()) return text;
    const regex = new RegExp(`(${searchText})`, 'ig');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-yellow-300">{part}</mark> : part
    );
  };

}
