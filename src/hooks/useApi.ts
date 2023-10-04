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

export const useApi = <T>(endpoint: string) => {
  const [apiResponse, setApiResponse] = useState<ApiResponse<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

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
        setApiResponse({
          data: undefined,
          isLoading: false,
          isError: true,
        });
        throw new Error("Oh no!");
      })
      .then((data: T) => {
        setApiResponse({
          data: data,
          isLoading: false,
          isError: false,
        });
      })
      .finally(() => {
        // setApiResponse({
        //   data: apiResponse.data as T,
        //   isLoading: false,
        //   isError: false,
        // });
      });
  }, []);

  return apiResponse;
};
