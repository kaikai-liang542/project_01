import { Inject, Post, Controller } from "@midwayjs/decorator";
import { Context } from '@midwayjs/express';
import { Validate } from "@midwayjs/validate";
import { UserLoginDTO } from '../dto/user.dto';
import { Body } from "@midwayjs/decorator";
import {UserModel} from '../model/user.model'
@Controller('/api')
export class userAPI{
  @Inject()
  ctx:Context;

  @Inject()
  userModel:UserModel
  @Post('/user/login')
  @Validate()
  async getUserByUsernameAndPassword(@Body() user:UserLoginDTO){
    const user1 = await this.userModel.getUserByUsernameAndPassword();
    return { success: true, message: 'OK', data: user1 };
  }
}
