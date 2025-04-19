import { Injectable } from '@nestjs/common';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

@Injectable()
export class FirebaseService {
    private readonly firestore: Firestore;

    constructor() {
        initializeApp({
            credential: cert(JSON.parse(process.env.SA_FIREBASE)),
        });
        this.firestore = getFirestore();
    }

    async getCollection(collectionName: string): Promise<any[]> {
        const snapshot = await this.firestore.collection(collectionName).get();
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }

    async addDocument(collectionName: string, data: any): Promise<string> {
        const docRef = await this.firestore.collection(collectionName).add(data);
        return docRef.id;
    }

    async deleteDocument(collectionName: string, id: string): Promise<void> {
        await this.firestore.collection(collectionName).doc(id).delete();
    }
}
