import IDatabase from './IDatabase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../firebaseConfig';

class CloudFirestore implements IDatabase {
  private db: firebase.firestore.Firestore;

  constructor() {
    this.db = this.getDbInstance();
  }

  async query<T>(recordType: string) {
    const querySnapshot = await this.db.collection(recordType).get();

    const records: T[] = [];
    querySnapshot.forEach((doc) => {
      records.push(doc.data() as T);
    });

    return records;
  }

  async save<T>(recordType: string, record: T) {
    await this.db.collection(recordType).add(record);
  }

  private getDbInstance() {
    firebase.initializeApp(firebaseConfig);
    return firebase.firestore();
  }
}

export default CloudFirestore;
