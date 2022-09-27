import { FileService, FileType } from './../file/file.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { Comment, CommentDocument } from './models/comment.schema';
import { Track, TrackDocument } from './models/track.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private TrackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private CommentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  async create(
    dto: CreateTrackDto,
    picture: Express.Multer.File,
    audio: Express.Multer.File,
  ): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const track = await this.TrackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });
    return track;
  }
  async getAll(count = 10, offset = 0): Promise<Track[]> {
    const tracks = await this.TrackModel.find().skip(offset).limit(count);
    return tracks;
  }
  async search(q = ''): Promise<Track[]> {
    const tracks = await this.TrackModel.find({
      title: { $regex: new RegExp(q, 'i') },
    });
    return tracks;
  }
  async getOne(id: ObjectId) {
    const track = await this.TrackModel.findById(id).populate('comments');
    return track;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.TrackModel.findByIdAndDelete(id);
    return track?._id;
  }
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.TrackModel.findById(dto.trackId);
    const newComment = await this.CommentModel.create({ ...dto });
    track?.comments.push(newComment._id);
    await track?.save();
    return newComment;
  }
  async newAudition(id: ObjectId): Promise<void> {
    const track = (await this.TrackModel.findById(id)) as TrackDocument;
    track.listens += 1;
    track.save();
  }
}
