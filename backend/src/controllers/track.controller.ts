import { TrackService } from './../services/track.service';
import { CreateTrackDto } from './../dto/create-track.dto';
import { CreateCommentDto } from './../dto/create-comment.dto';
import { ObjectId } from 'mongoose';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  // По треку
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  createTrack(
    @UploadedFiles()
    files: { picture: Express.Multer.File[]; audio: Express.Multer.File[] },
    @Body() dto: CreateTrackDto,
  ) {
    const { picture, audio } = files;
    console.log(picture, audio);

    return this.trackService.create(dto, picture[0], audio[0]);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.trackService.getAll(count, offset);
  }
  @Get('/total')
  getCount() {
    return this.trackService.getCount();
  }
  // @Get()
  // search(@Query('q') q: string) {
  //   return this.trackService.search(q);
  // }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id);
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  // По комментам
  @Post('/comments')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  // По прослушиваниям
  @Post('/listen/:id')
  newAudition(@Param('id') id: ObjectId) {
    return this.trackService.newAudition(id);
  }
}
