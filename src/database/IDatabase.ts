interface IDatabase {
  query<T>(recordType: string): Promise<T[]>;
  save<T>(recordType: string, record: T): Promise<void>;
}

export default IDatabase;
