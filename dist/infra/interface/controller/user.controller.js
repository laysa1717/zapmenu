"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("../../../infra/firebase/firebase.service");
let UserController = class UserController {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    async createUser(body) {
        const user = { username: body.username, password: body.password };
        const id = await this.firebaseService.addDocument('users', user);
        return { id };
    }
    async getUser(username) {
        const users = await this.firebaseService.getCollection('users');
        const user = users.find((u) => u.username === username);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return { id: user.id, username: user.username, password: user.password };
    }
    async login(body) {
        const users = await this.firebaseService.getCollection('users');
        const user = users.find((u) => u.username === body.username && u.password === body.password);
        if (!user) {
            throw new common_1.BadRequestException('Invalid username or password');
        }
        return { id: user.id };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('/createUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/getUser/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
], UserController);
//# sourceMappingURL=user.controller.js.map