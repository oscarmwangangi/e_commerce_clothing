import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For the filter toggle icon

// Function to fetch products from a single table
const fetchProductsFromTable = async (tableName, category = null) => {
  const url = category
    ? `/api/${tableName}?category=${category}`
    : `/api/${tableName}`;
  const response = await axios.get(url);
  return response.data;
};

// Function to fetch products from all tables
const fetchAllProducts = async (category = null) => {
    const tables = ["products_one", "products_two", "products_three"];
    const allProducts = await Promise.all(
      tables.map((table) =>
        fetchProductsFromTable(table, category).then((products) =>
          products.map((product) => ({ ...product, table }))
        )
      )
    );
    // Combine products from all tables
    return allProducts.flat();
};

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedTable, setSelectedTable] = useState(""); // Default to show all tables
  const [selectedCategory, setSelectedCategory] = useState(""); // Default to show all categories
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Manage filter visibility
  const [gridCols, setGridCols] = useState(3); // Default to 3 columns
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products whenever the table or category changes
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        if (selectedTable) {
          // Fetch products from the selected table
          const data = await fetchProductsFromTable(selectedTable, selectedCategory);
          setProducts(data);
        } else {
          // Fetch products from all tables
          const data = await fetchAllProducts(selectedCategory);
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    loadProducts();
  }, [selectedTable, selectedCategory]);

  // Skeleton Loader component
  const SkeletonLoader = () => (
    <div className="bg-gray-200 animate-pulse rounded-lg p-4">
      <div className="bg-gray-300 h-screen rounded-md mb-4"></div>
      <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2"></div>
    </div>
  );

  return (
    <section className="bg-[#fdfcfc] pt-10 ">
      <h1 className="text-center">
        <span className="text-4xl text-[#1F1919] font-extralight font-Albra">What's New<br /></span>
        <span className="block p-4 font-sans">New in? More like ‘soon to be sold out’...</span>
      </h1>

      <div className="container text-center mx-auto">
        {/* Table Selection and Filter Controls */}
        <div className="flex p-2 justify-between gap-2 border items-center h-12 mb-1">
          <div className="filter-section">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 p-2">
              Filter: <span className="text-xl">{isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            {isFilterOpen && (
              <div className="filter-options flex flex-col">
                <button onClick={() => setSelectedCategory("")} className="px-4 py-2">All Categories</button>
                <button onClick={() => setSelectedCategory("Knitwear")} className="px-4 py-2">Knitwear</button>
                <button onClick={() => setSelectedCategory("Dresses")} className="px-4 py-2">Dresses</button>
                <button onClick={() => setSelectedCategory("Tops")} className="px-4 py-2">Tops</button>
              </div>
            )}
          </div>

          <div className="flex items-center">
            <button onClick={() => setGridCols(2)} className="p-2 rounded-md hover:bg-gray-200">
              <span className="w-4 h-4 grid grid-cols-2 gap-1">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="bg-black w-full h-full"></span>
                ))}
              </span>
            </button>
            <button onClick={() => setGridCols(3)} className="p-2 rounded-md hover:bg-gray-200">
              <span className="w-4 h-4 grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="bg-black w-full h-full"></span>
                ))}
              </span>
            </button>
            <button onClick={() => setGridCols(4)} className="p-2 rounded-md hover:bg-gray-200">
              <span className="w-4 h-4 grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <span key={i} className="bg-black w-full h-full"></span>
                ))}
              </span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid grid-cols-${gridCols} gap-1`}>
          {loading
            ? Array.from({ length: 9 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : products.map((product) => (
                <a
                  href={`/product/${product.table}/${product.id}`}
                  className="block rounded transition hover:shadow-lg transform-gpu"
                  key={product.id}
                >
                  <div className="relative overflow-hidden rounded-t">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-screen object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      {product.color} | ${product.price}
                    </p>
                  </div>
                </a>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Allproducts;
