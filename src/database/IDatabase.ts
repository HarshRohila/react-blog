interface IDatabase {
  query<T>(recordType: string): Promise<T[]>;
}

export default IDatabase;
