import { Track } from './track.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AlbumDocument = Album & mongoose.Document;

@Schema()
export class Album {
  @Prop()
  title: string;

  @Prop()
  description: string;
  @Prop()
  likes: number;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }] })
  tracks: Track[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
