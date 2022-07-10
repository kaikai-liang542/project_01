import { Configuration, App } from '@midwayjs/decorator';
import * as express from '@midwayjs/express';
import * as orm from '@midwayjs/orm';
import * as validate from '@midwayjs/validate'
import { join } from 'path';

@Configuration({
  imports: [express,orm,validate],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: express.Application;

  async onReady() {}
}
