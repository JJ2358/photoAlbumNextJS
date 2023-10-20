export interface Comment {
    author: string;
    comment: string;
  }
  
  export interface Photo {
    id: number;
    title: string;
    caption: string;
    source: string;
    comments: Comment[];
  }
  
  export interface SamplesData {
    photos: Photo[];
  }
  