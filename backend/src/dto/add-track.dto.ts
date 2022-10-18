import { ObjectId } from 'mongoose';

export class addTrackDto {
  readonly playlistId: ObjectId;
  readonly trackId: ObjectId;
}
