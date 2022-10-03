import { TrackController } from './../controllers/track.controller';
import { TrackService } from './../services/track.service';
import { FileService } from './../services/file.service';
import { Comment, CommentSchema } from '../models/comment.schema';
import { Track, TrackSchema } from '../models/track.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService],
})
export class TrackModule {}
