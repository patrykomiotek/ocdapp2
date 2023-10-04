import { useEffect, useState } from "react";

const BASE_URL = "https://api.airtable.com/v0/appJ0votvrhmT0Sbq";
const TOKEN =
  "Bearer patVQ864y6eGr1CkQ.760719abde62320306c65daff180b15fdc943d7cbf5301dc552175a39969fa4f";

export const useApi = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    void fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: TOKEN,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        setIsError(true);
        throw new Error("Oh no!");
      })
      .then((data: T) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
