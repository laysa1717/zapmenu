import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MenuController } from './infra/interface/controller/menu.controller';
import { FirebaseModule } from './infra/firebase/firebase.module';
import { UserController } from './infra/interface/controller/user.controller';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        FirebaseModule
    ],
    controllers: [MenuController, UserController],
})
export class AppModule { }
