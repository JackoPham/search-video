import { Get, Controller, Headers, Post, Body } from '@nestjs/common';
import { SystemService } from '@business/system.service';
import GoogleYoutubeService from '@business/google.youtube';
import SearchModel from '@model/SearchModel';

@Controller('system')
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
  async search(@Body() data: SearchModel) {
    return await this.youtubeService.run(data);
  }
}
export default SystemController;
