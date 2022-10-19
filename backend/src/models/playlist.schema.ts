import { Track } from './track.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PlaylistDocument = Playlist & mongoose.Document;

@Schema()
export class Playlist {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  likes: number;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }] })
  tracks: Track[];
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
