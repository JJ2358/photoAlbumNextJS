export interface Photo {
  id: number;
  title: string;
  caption: string;
  source: string;
  comments: Comment[];
}

export interface Comment {
  comment: string;
  author: string;
}

export interface AlbumData {
  photos: Photo[];
}

export type Sample = Photo;
