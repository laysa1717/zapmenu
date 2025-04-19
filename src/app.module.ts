import { Module } from '@nestjs/common';
import { EnvConfigModule } from './infra/config/config.module';
import { HttpModule } from '@nestjs/axios';
import { MenuController } from './infra/controller/menu.controller';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [HttpModule, EnvConfigModule, MenuModule],
  controllers: [MenuController],
  providers: [],
})
export class AppModule {}