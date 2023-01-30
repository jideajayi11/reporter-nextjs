import { useEffect, useState } from "react";

const useFetch = (
  { url, method="GET", body=null, headers=null, ...others },
  [makeRequest=true, setMakeRequest=()=>{}]=[],
) => {
  const [fetchResult, setFetchResult] = useState({
    loading: true,
    error: '',
    data: null,
  });

  const updateFetchResult = updateObj => setFetchResult({ ...fetchResult, ...updateObj });

  const fetchFunction = async () => {
    try {
      const request = new Request(url, {
        method,
        body: JSON.stringify(body),
        headers: new Headers({ 'Content-Type': 'application/json', ...headers }),
        ...others
      });
      const res = await fetch(request);
      const data = await res.json();

      updateFetchResult({ data, loading: false });
      setMakeRequest(false);
    } catch (err) {
      updateFetchResult({ error: err.message, loading: false });
    }
  }

  useEffect(() => {
    makeRequest && fetchFunction();
  }, [makeRequest]);

  return fetchResult;
}

export default useFetch;
