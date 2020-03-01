import { Module } from '@nestjs/common';
import { AppController } from './controllers/home/home.controller';
import { AppService } from './services/home/home.service';
import { UserModule } from './services/user/user.module';
import { AuthModule } from './services/auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
