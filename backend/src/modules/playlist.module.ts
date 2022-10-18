import { PlaylistController } from '../controllers/playlist.controller';
import { Track, TrackSchema } from '../models/track.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PlaylistService } from 'src/services/playlist.service';
import { Playlist, PlaylistSchema } from 'src/models/playlist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Playlist.name, schema: PlaylistSchema },
    ]),
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
