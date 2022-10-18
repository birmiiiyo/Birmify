import { ITrack } from './Track';

export interface IPlaylist {
  _id: string;
  title: string;
  description: string;
  likes: number;
  __v: number;
  tracks: ITrack[];
}
