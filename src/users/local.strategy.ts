import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from './users.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super();
  }

  async validate(email: string, pwd: string): Promise<any> {
    const user = await this.userService.validateUser(email, pwd);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
