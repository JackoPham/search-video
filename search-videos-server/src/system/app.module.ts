import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SystemModule } from '@module/system.module';
import { UserModule } from '@module/user.module';

@Module({
  imports: [SystemModule, UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthenMiddleware).forRoutes(PermissionController);
  }
}
