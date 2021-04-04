import { useEffect, useState } from 'react';

export type Await<T> = T extends Promise<infer U> ? U : T;

export default function useApi<T extends (...args: any) => Promise<any>>(fetchData: T) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Await<ReturnType<T>> | null>(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    const fetchDataAndReflectInState = async () => {
      setIsLoading(true);

      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    if (shouldFetch) {
      fetchDataAndReflectInState();
      setShouldFetch(false);
    }
  }, [fetchData, shouldFetch]);

  const retry = () => {
    setShouldFetch(true);
  };

  return { data, isLoading, error, retry };
}
