import { useEffect } from "react";

export const Products = () => {
  useEffect(() => {
    void fetch("https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products", {
      headers: {
        Authorization: `Bearer patVQ864y6eGr1CkQ.760719abde62320306c65daff180b15fdc943d7cbf5301dc552175a39969fa4f`,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Oh no!");
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {/* products */}
    </div>
  );
};
