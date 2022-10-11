import { Track, TrackDocument } from './../models/track.schema';
import { addTrackDto } from './../dto/add-track.dto';
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
    @InjectModel(Track.name) private TrackModel: Model<TrackDocument>,
  ) {}

  async create(dto: CreateAlbumDto): Promise<Album> {
    const album = await this.AlbumModel.create({
      ...dto,
      likes: 0,
      tracks: [],
    });
    return album;
  }
  async getAll(count = 10, offset = 0): Promise<Album[]> {
    const albums = await this.AlbumModel.find()
      .skip(offset * count)
      .limit(count);
    return albums;
  }
  async getOne(id: ObjectId) {
    const album = await this.AlbumModel.findById(id).populate('tracks');
    return album;
  }
  async getCount(): Promise<number> {
    const total = await this.AlbumModel.find().count();
    return total;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const album = await this.AlbumModel.findByIdAndDelete(id);
    return album?._id;
  }
  async addTrack(dto: addTrackDto): Promise<ObjectId> {
    const album = await this.AlbumModel.findById(dto.albumId);
    const track = await this.TrackModel.findById(dto.trackId);
    album?.tracks.push(track?._id);
    await album?.save();
    return album?._id;
  }
}
