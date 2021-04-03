import CloudFirestore from '../database/CloudFirestore';
import IDatabase from '../database/IDatabase';

const db: IDatabase = new CloudFirestore();
export default db;
