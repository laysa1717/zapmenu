export declare class FirebaseService {
    private readonly firestore;
    constructor();
    getCollection(collectionName: string): Promise<any[]>;
    addDocument(collectionName: string, data: any): Promise<string>;
    deleteDocument(collectionName: string, id: string): Promise<void>;
}
