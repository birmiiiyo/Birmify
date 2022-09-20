import { FileService } from './../file/file.service';
import { Comment, CommentSchema } from './models/comment.schema';
import { Track, TrackSchema } from './models/track.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
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
