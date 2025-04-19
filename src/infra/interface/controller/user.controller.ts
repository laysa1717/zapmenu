import { Body, Controller, Get, Param, Post, BadRequestException } from '@nestjs/common';
import { FirebaseService } from '../../../infra/firebase/firebase.service';

@Controller('user')
export class UserController {
    constructor(private readonly firebaseService: FirebaseService) {}

    @Post('/createUser')
    async createUser(@Body() body: { username: string; password: string }): Promise<{ id: string }> {
        const user = { username: body.username, password: body.password };
        const id = await this.firebaseService.addDocument('users', user);
        return { id };
    }

    @Get('/getUser/:username')
    async getUser(@Param('username') username: string): Promise<any> {
        const users = await this.firebaseService.getCollection('users');
        const user = users.find((u) => u.username === username);
        if (!user) {
            throw new BadRequestException('User not found');
        }
        return { id: user.id, username: user.username, password: user.password };
    }

    @Post('/login')
    async login(@Body() body: { username: string; password: string }): Promise<{ id: string }> {
        const users = await this.firebaseService.getCollection('users');
        const user = users.find((u) => u.username === body.username && u.password === body.password);

        if (!user) {
            throw new BadRequestException('Invalid username or password');
        }
        return { id: user.id };
    }
}
