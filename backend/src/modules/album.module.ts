import { AlbumController } from './../controllers/album.controller';
import { Track, TrackSchema } from '../models/track.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AlbumService } from 'src/services/album.service';
import { Album, AlbumSchema } from 'src/models/album.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
