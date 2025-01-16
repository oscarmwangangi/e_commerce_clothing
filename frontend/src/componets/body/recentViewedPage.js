import React, { useEffect } from "react";
import RecentViewed from "./RecentViewed";

function recentViewedPage ({ product }) {
  useEffect(() => {
    // Call this when the page is loaded to track the product being viewed
    addToRecent(product);
  }, [product]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {/* Add other product details */}
    </div>
  );
}
