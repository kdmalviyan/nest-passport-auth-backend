import { Controller, Get, Post, Body, Res, Req, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/services/user/user.service';
import { User } from 'src/models/interfaces/user.interfaces';
import { CreateUserDto } from 'src/dtos/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/services/auth/jwt-auth.guard';

@ApiTags('User controller')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto){
    console.log("Creating User -> ", createUserDto);
    const createdUser = this.userService.create(createUserDto);
    return createdUser;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} User`;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto,) {
    return `This action updates a #${id} User`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} User`;
  }

}
