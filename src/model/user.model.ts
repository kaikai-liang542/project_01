import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { UserEntity } from '../entity/user.entity';
import { Repository } from "typeorm";

 @Provide()
 export class UserModel{

  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;
 /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(){ 
    let userRecord = new UserEntity();
  userRecord  = this.userRepo.merge(userRecord,{
    username:'',
    password:''
  });
  try{
    const created = await this.userRepo.save(userRecord);
    return created;

  }catch(e){
    console.log(e)
  }
}
 }