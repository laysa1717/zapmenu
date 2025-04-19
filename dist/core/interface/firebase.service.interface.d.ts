export interface IFirebaseService {
    getCollection(collectionName: string): Promise<any[]>;
}
