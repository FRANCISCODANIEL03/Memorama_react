import { createContext, useContext } from 'react';

export const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);
