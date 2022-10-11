import { ObjectId } from 'mongoose';

export class addTrackDto {
  readonly albumId: ObjectId;
  readonly trackId: ObjectId;
}
