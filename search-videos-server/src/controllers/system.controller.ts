import {
  Get,
  Controller,
  Headers,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { SystemService } from '@business/system.service';
import GoogleYoutubeService from '@business/google.youtube';
import SearchModel from '@model/SearchModel';
import { AuthGuard } from '@system/guard/auth.guard';
import { Authorized } from '@system/decorator/roles.decorator';

@Controller('system')
@UseGuards(AuthGuard)
class SystemController {
  constructor(
    private readonly appService: SystemService,
    private readonly youtubeService: GoogleYoutubeService,
  ) {}

  @Get('test')
  root(@Headers('authorization') token: string): string {
    return this.appService.root();
  }

  @Post('/search')
  @Authorized()
  async search(@Body() data: SearchModel) {
    return await this.youtubeService.run(data);
  }
}
export default SystemController;
