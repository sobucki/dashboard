export interface Meme {
  id: string;
  link: string;
  post_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface Pagination<T> {
  result: T[];
  total: number;
}

export interface Post {
  id: string;
  link: string;
  date: Date;
  memes?: Meme[];
}
