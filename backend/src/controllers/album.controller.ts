import { CreateAlbumDto } from './../dto/create-album.dto';
import { AlbumService } from './../services/album.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

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
}
