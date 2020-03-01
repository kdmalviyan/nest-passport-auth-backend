import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { DatabaseModule } from 'src/providers/database/database.module';
import { UserService } from './user.service';
import { userProviders } from '../../providers/users/users.providers'
@Module({
    imports: [DatabaseModule],
    exports: [UserService],
    controllers: [UserController],
    providers: [
        UserService,
        ...userProviders,
    ],
})
export class UserModule { }