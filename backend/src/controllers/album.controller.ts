import { addTrackDto } from './../dto/add-track.dto';
import { ObjectId } from 'mongoose';
import { CreateAlbumDto } from './../dto/create-album.dto';
import { AlbumService } from './../services/album.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('/albums')
export class AlbumController {
  constructor(private albumService: AlbumService) {}
  @Post()
  createAlbum(@Body() dto: CreateAlbumDto) {
    return this.albumService.create(dto);
  }
  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.albumService.getAll(count, offset);
  }
  @Get('/total')
  getCount() {
    return this.albumService.getCount();
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.albumService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.albumService.delete(id);
  }
  @Post('/tracks')
  addTrack(@Body() dto: addTrackDto) {
    return this.albumService.addTrack(dto);
  }
}
