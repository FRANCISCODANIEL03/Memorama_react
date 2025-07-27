import { useVideoContext } from '../context/VideoContext';

export function VideoList() {
  const { filteredVideos, confirmDelete, searchText } = useVideoContext();

}
