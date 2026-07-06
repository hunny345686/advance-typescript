import { useState, useEffect } from "react";


interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}


export function useFetch<T>(url: string): FetchState<T> {
     
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);   


  return { data, loading, error };

}


