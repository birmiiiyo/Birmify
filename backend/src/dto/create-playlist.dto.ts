import { ObjectId } from 'mongoose';

export class CreatePlaylistDto {
  readonly title: string;
  readonly description: string;
  readonly trackId: ObjectId;
}
