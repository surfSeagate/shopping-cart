import React from "react";

// grabs index.js automatically
import ProductListing from "../features/product-listing";
import data from "../data/products.json";

const HomePage = () => (
  <div>
    <h2>HomePage</h2>
    <ProductListing products={data.products} />
  </div>
);

export default HomePage;
