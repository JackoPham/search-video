import { Module } from '@nestjs/common';
import SystemController from '@controllers/system.controller';
import { SystemService } from '@business/system.service';
import GoogleYoutubeService from '@business/google.youtube';

@Module({
  controllers: [SystemController],
  providers: [SystemService, GoogleYoutubeService],
})
export class SystemModule {}
