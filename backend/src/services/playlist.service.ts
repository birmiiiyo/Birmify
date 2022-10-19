import { Track, TrackDocument } from '../models/track.schema';
import { addTrackDto } from '../dto/add-track.dto';
import { CreatePlaylistDto } from '../dto/create-playlist.dto';
import { PlaylistDocument } from '../models/playlist.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Playlist } from 'src/models/playlist.schema';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(Playlist.name) private PlaylistModel: Model<PlaylistDocument>,
    @InjectModel(Track.name) private TrackModel: Model<TrackDocument>,
  ) {}

  async create(dto: CreatePlaylistDto): Promise<Playlist> {
    const playlist = await this.PlaylistModel.create({
      ...dto,
      likes: 0,
      tracks: [],
    });
    return playlist;
  }
  async getAll(count = 10, offset = 0): Promise<Playlist[]> {
    const playlists = await this.PlaylistModel.find()
      .skip(offset * count)
      .limit(count);
    return playlists;
  }
  async getOne(id: ObjectId) {
    const playlist = await this.PlaylistModel.findById(id).populate('tracks');
    return playlist;
  }
  async getCount(): Promise<number> {
    const total = await this.PlaylistModel.find().count();
    return total;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const playlist = await this.PlaylistModel.findByIdAndDelete(id);
    return playlist?._id;
  }
  async addTrack(dto: addTrackDto): Promise<string> {
    const playlist = await this.PlaylistModel.findById(dto.playlistId);
    const track = await this.TrackModel.findById(dto.trackId);
    if (playlist?.tracks.includes(track?._id)) {
      return 'Трек уже есть в плейлисте';
    }
    playlist?.tracks.push(track?._id);
    await playlist?.save();
    return track?.title as string;
  }
}
