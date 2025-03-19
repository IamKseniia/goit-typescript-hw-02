export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface FetchPhotosResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

export interface ImageCardProps {
  item: Photo;
  openModal: (url: string) => void;
}

export interface ImageGalleryProps {
  photos: Photo[];
  openModal: (url: string) => void;
}

export interface LoadMoreBtnProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string | null;
}

export interface SearchBarProps {
  handleSetQuery: (query: string) => void;
}

export interface AppState {
  photos: Photo[];
  loading: boolean;
  error: boolean;
  query: string;
  page: number;
  perPage: number;
  modalIsOpen: boolean;
  targetImage: string | null;
}
