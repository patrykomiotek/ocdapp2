import { useEffect, useState } from "react";

const BASE_URL = "https://api.airtable.com/v0/appJ0votvrhmT0Sbq";
const TOKEN =
  "Bearer patVQ864y6eGr1CkQ.760719abde62320306c65daff180b15fdc943d7cbf5301dc552175a39969fa4f";

type ApiResponse<T> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

type Fetcher<T> = string | (() => Promise<T>);

export const useApi = <T>(endpoint: string) => {
  const [apiResponse, setApiResponse] = useState<ApiResponse<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          headers: {
            Authorization: TOKEN,
            "content-type": "application/json",
          },
        });

        if (!response.ok) {
          setApiResponse({
            data: undefined,
            isLoading: false,
            isError: true,
          });
          throw new Error("Oh no!");
        }

        const responseData = (await response.json()) as T;
        setApiResponse({
          data: responseData,
          isLoading: false,
          isError: false,
        });
      } catch {
        // any other error
      }
    };

    void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return apiResponse;
};
