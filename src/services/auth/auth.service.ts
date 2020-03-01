import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, 
    private readonly jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByUserEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const validatedUser = await this.validateUser(user.email, user.password);
    const payload = {email: validatedUser.email, userId: validatedUser._id, role: validatedUser.role};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}