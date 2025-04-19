import { FirebaseService } from '../../../infra/firebase/firebase.service';
export declare class UserController {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    createUser(body: {
        username: string;
        password: string;
    }): Promise<{
        id: string;
    }>;
    getUser(username: string): Promise<any>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        id: string;
    }>;
}
