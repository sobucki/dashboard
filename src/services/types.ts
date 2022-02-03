export interface Meme {
  id: string;
  link: string;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pagination<T> {
  result: T[];
  total: number;
}

export interface Post {
  id: string;
  link: string;
  date: Date;
  Meme?: Meme[];
}

export interface Category {
  id: string;
  link: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
