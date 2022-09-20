import { FileModule } from './file/file.module';
import { ConfigModule } from '@nestjs/config';
import { TrackModule } from './track/track.module';
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
  ],
})
export class AppModule {}
