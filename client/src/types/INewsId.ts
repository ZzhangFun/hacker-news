export interface INewsId {
  id: number;
  title: string;
  user: string | null;
  time: number;
  url?: string;
  comments: INewsId[];
  comments_count: number;
  content: string;
}
