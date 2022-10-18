import { addTrackDto } from '../dto/add-track.dto';
import { ObjectId } from 'mongoose';
import { CreatePlaylistDto } from '../dto/create-playlist.dto';
import { PlaylistService } from '../services/playlist.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('/playlists')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}
  @Post()
  createAlbum(@Body() dto: CreatePlaylistDto) {
    return this.playlistService.create(dto);
  }
  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.playlistService.getAll(count, offset);
  }
  @Get('/total')
  getCount() {
    return this.playlistService.getCount();
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.playlistService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.playlistService.delete(id);
  }
  @Post('/tracks')
  addTrack(@Body() dto: addTrackDto) {
    return this.playlistService.addTrack(dto);
  }
}
