import { MidwayConfig } from '@midwayjs/core';
import { UserEntity } from "../entity/user.entity"

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1657354275723_2562',
  express: {
    port: 7001,
  },
 orm:{
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [UserEntity],
    synchronize: true,
    logging: false,
 }
} as MidwayConfig;
