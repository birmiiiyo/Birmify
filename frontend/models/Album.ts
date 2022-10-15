import { ITrack } from './Track';

export interface IAlbum {
  _id: string;
  title: string;
  description: string;
  likes: number;
  __v: number;
  tracks: ITrack[];
}
