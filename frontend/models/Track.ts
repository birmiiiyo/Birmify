import { IComment } from './Comment';

export interface ITrack {
  _id: string;
  title: string;
  author: string;
  text: string;
  listens: number;
  comments: IComment[] | null;
  __v: number;
  picture: string;
  audio: string;
}
