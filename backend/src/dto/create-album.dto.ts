import { ObjectId } from 'mongoose';

export class CreateAlbumDto {
  readonly title: string;
  readonly description: string;
  readonly trackId: ObjectId;
}
