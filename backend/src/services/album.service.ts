import { CreateAlbumDto } from './../dto/create-album.dto';
import { AlbumDocument } from './../models/album.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Album } from 'src/models/album.schema';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private AlbumModel: Model<AlbumDocument>,
  ) {}

  async create(dto: CreateAlbumDto): Promise<Album> {
    const album = await this.AlbumModel.create({
      ...dto,
      likes: 0,
    });
    return album;
  }
  async getAll(count = 10, offset = 0): Promise<Album[]> {
    const albums = await this.AlbumModel.find()
      .skip(offset * count)
      .limit(count);
    return albums;
  }
  async getCount(): Promise<number> {
    const total = await this.AlbumModel.find().count();
    return total;
  }
  async getOne(id: ObjectId) {
    const album = await this.AlbumModel.findById(id).populate('tracks');
    return album;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const album = await this.AlbumModel.findByIdAndDelete(id);
    return album?._id;
  }
}
