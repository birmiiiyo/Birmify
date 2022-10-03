import { AlbumModule } from './album.module';
import { TrackModule } from './track.module';
import { FileModule } from './file.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`),
    TrackModule,
    FileModule,
    AlbumModule,
  ],
})
export class AppModule {}
