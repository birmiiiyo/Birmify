import { Playlist } from './playlist.schema';
import { Comment } from './comment.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TrackDocument = Track & mongoose.Document;

@Schema()
export class Track {
  @Prop()
  title: string;

  @Prop()
  author: string;
  @Prop()
  text: string;
  @Prop()
  listens: number;
  @Prop()
  picture: string;
  @Prop()
  audio: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' })
  track: Playlist;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
