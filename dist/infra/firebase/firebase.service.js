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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
let FirebaseService = class FirebaseService {
    constructor() {
        (0, app_1.initializeApp)({
            credential: (0, app_1.cert)(JSON.parse(process.env.SA_FIREBASE)),
        });
        this.firestore = (0, firestore_1.getFirestore)();
    }
    async getCollection(collectionName) {
        const snapshot = await this.firestore.collection(collectionName).get();
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
    async addDocument(collectionName, data) {
        const docRef = await this.firestore.collection(collectionName).add(data);
        return docRef.id;
    }
    async deleteDocument(collectionName, id) {
        await this.firestore.collection(collectionName).doc(id).delete();
    }
};
exports.FirebaseService = FirebaseService;
exports.FirebaseService = FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseService);
//# sourceMappingURL=firebase.service.js.map