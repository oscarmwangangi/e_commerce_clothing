import React, { useState, useEffect } from "react";

// Helper function to handle API requests for CRUD operations
const fetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const Admin = () => {
    // States to manage CRUD operations for all tables
    const [productsOne, setProductsOne] = useState([]);
    const [productsTwo, setProductsTwo] = useState([]);
    const [productsThree, setProductsThree] = useState([]);
    const [carousel, setCarousel] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingProductTwo, setEditingProductTwo] = useState(null);
    const [editingProductThree, setEditingProductThree] = useState(null);
    const [editingCarouselItem, setEditingCarouselItem] = useState(null);
    const [carouselOne, setCarouselOne] = useState([]);
    const [editingCarouselOneItem, setEditingCarouselOneItem] = useState(null);
   
    
    // Input fields for adding data
    const [newProductOne, setNewProductOne] = useState({
        name: "",
        price: "",
        description: "",
        color: "",
        size: "",
        category: "",
        image: "",
    });
    const [newProductTwo, setNewProductTwo] = useState({
        name: "",
        price: "",
        description: "",
        color: "",
        size: "",
        category: "",
        image: "",
    });
    const [newProductThree, setNewProductThree] = useState({
        name: "",
        price: "",
        description: "",
        color: "",
        size: "",
        category: "",
        image: "",
    });
    const [newCarousel, setNewCarousel] = useState({
        name: "",
        price: "",
        description: "",
        color: "",
        size: "",
        category: "",
        image: "",
    });
    const [newCarouselOne, setNewCarouselOne] = useState({
        name: "",
        price: "",
        description: "",
        color: "",
        size: "",
        category: "",
        image: "",
    });

    // Fetch data for all tables when component mounts
    useEffect(() => {
        fetchData("/api/products_one/").then((data) => setProductsOne(data));
        fetchData("/api/products_two/").then((data) => setProductsTwo(data));
        fetchData("/api/products_three/").then((data) => setProductsThree(data));
        fetchData("/api/carousel/").then((data) => setCarousel(data));
        fetchData("/api/carouselOne/").then((data) => setCarouselOne(data));
    }, []);

    // Handle Add operation for all tables
    const [successMessage, setSuccessMessage] = useState(""); // State to hold success message
    useEffect(() => {
        if (successMessage) {
          const timer = setTimeout(() => {
            setSuccessMessage('');
          }, 3000); // Disappears after 3 seconds
          return () => clearTimeout(timer);
        }
      }, [successMessage]);
    const validateProductData = (data) => {
        return data.name && data.price && data.description && data.color && data.size && data.category;
    };
    
    const handleAdd = (data, table) => {
        if (!validateProductData(data)) {
            alert("Please fill all fields before submitting.");
            return;
        }
    
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
    
        fetch(`/api/${table}/`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((newData) => {
                switch (table) {
                    case "products_one":
                        setProductsOne([...productsOne, newData]);
                        break;
                    case "products_two":
                        setProductsTwo([...productsTwo, newData]);
                        break;
                    case "products_three":
                        setProductsThree([...productsThree, newData]);
                        break;
                    case "carousel":
                        setCarousel([...carousel, newData]);
                        break;
                    case "carouselOne":
                        setCarouselOne([...carouselOne, newData]);
                        break;
                    default:
                        break;
                }
    
                setSuccessMessage("Submitted successfully!");

    
            // Clear the input fields after submission
            if (table === "products_one") {
                setNewProductOne({
                    name: "",
                    price: "",
                    description: "",
                    color: "",
                    size: "",
                    category: "",
                    image: "",
                });
            } else if (table === "products_two") {
                setNewProductTwo({
                    name: "",
                    price: "",
                    description: "",
                    color: "",
                    size: "",
                    category: "",
                    image: "",
                });
            } else if (table === "products_three") {
                setNewProductThree({
                    name: "",
                    price: "",
                    description: "",
                    color: "",
                    size: "",
                    category: "",
                    image: "",
                });
            } else if (table === "carousel") {
                setNewCarousel({
                    name: "",
                    price: "",
                    description: "",
                    color: "",
                    size: "",
                    category: "",
                    image: "",                
                });
            }else if (table === "carouselOne") {
                    setNewCarouselOne({
                        name: "",
                        price: "",
                        description: "",
                        color: "",
                        size: "",
                        category: "",
                        image: "",
                    });
            }
        })
        .catch((error) => {
            console.error("Error during API request:", error);
        });
    };
    
    

    // Handle input change for ProductsOne form
    const handleProductOneChange = (e) => {
    const { name, value, files } = e.target;
    setNewProductOne({
        ...newProductOne,
        [name]: name === "image" ? files[0] : value,
    });
};

    const handleDeleteProduct = async (id) => {
        await fetch(`http://localhost:8000/api/products_one/${id}/`, {
            method: 'DELETE',
        });
        setProductsOne(productsOne.filter(product => product.id !== id)); // Update local state
    };
    
    // Handle Update Product
    const handleUpdateProduct = async () => {
        const formData = new FormData();
        formData.append("name", editingProduct.name);
        formData.append("price", editingProduct.price);
        formData.append("description", editingProduct.description);
        formData.append("color", editingProduct.color);
        formData.append("size", editingProduct.size);
        formData.append("category", editingProduct.category);
        if (editingProduct.image) {
            formData.append("image", editingProduct.image);
        }
    
        const response = await fetch(`http://localhost:8000/api/products_one/${editingProduct.id}/`, {
            method: 'PUT',
            body: formData, // Use FormData as the body
        });
    
        const data = await response.json();
        setProductsOne(productsOne.map(product => (product.id === data.id ? data : product))); // Update local state
        setEditingProduct(null); // Reset editing state
    };
    
    
    // Handle input change for ProductsTwo form
    const handleProductTwoChange = (e) => {
        const { name, value, files } = e.target;
    setNewProductTwo({
        ...newProductTwo,
        [name]: name === "image" ? files[0] : value,
    });
    };

    const handleDeleteProductTwo = async (id) => {
        await fetch(`http://localhost:8000/api/products_two/${id}/`, {
            method: 'DELETE',
        });
        setProductsTwo(productsTwo.filter(product => product.id !== id)); // Update local state
    };
    
    // Handle Update Product
    const handleUpdateProductTwo = async () => {
        const formData = new FormData();
        formData.append("name", editingProductTwo.name);
        formData.append("price", editingProductTwo.price);
        formData.append("description", editingProductTwo.description);
        formData.append("color", editingProductTwo.color);
        formData.append("size", editingProductTwo.size);
        formData.append("category", editingProductTwo.category);
        if (editingProductTwo.image) {
            formData.append("image", editingProductTwo.image); // Append the file
        }
    
        const response = await fetch(`http://localhost:8000/api/products_two/${editingProductTwo.id}/`, {
            method: 'PUT',
            body: formData, // Use FormData for the body
        });
    
        const data = await response.json();
        setProductsTwo(productsTwo.map(product => (product.id === data.id ? data : product))); // Update local state
        setEditingProductTwo(null); // Reset editing state
    };
    

    // Handle input change for ProductsThree form
    const handleProductThreeChange = (e) => {
        const { name, value, files } = e.target;
    setNewProductThree({
        ...newProductThree,
        [name]: name === "image" ? files[0] : value,
    });
    };

    const handleDeleteProductThree = async (id) => {
        await fetch(`http://localhost:8000/api/products_three/${id}/`, {
            method: 'DELETE',
        });
        setProductsThree(productsThree.filter(product => product.id !== id)); // Update local state
    };
    
    // Handle Update Product
    const handleUpdateProductThree = async () => {
        const formData = new FormData();
        formData.append("name", editingProductThree.name);
        formData.append("price", editingProductThree.price);
        formData.append("description", editingProductThree.description);
        formData.append("color", editingProductThree.color);
        formData.append("size", editingProductThree.size);
        formData.append("category", editingProductThree.category);
        if (editingProductThree.image) {
            formData.append("image", editingProductThree.image); // Append the file if it exists
        }
    
        const response = await fetch(`http://localhost:8000/api/products_three/${editingProductThree.id}/`, {
            method: 'PUT',
            body: formData, // Use FormData for the body
        });
    
        const data = await response.json();
        setProductsThree(productsThree.map(product => (product.id === data.id ? data : product))); // Update local state
        setEditingProductThree(null); // Reset editing state
    };
    

    // Handle input change for Carousel form
    const handleCarouselChange = (e) => {
        const { name, value, files } = e.target;
        setNewCarousel({
            ...newCarousel,
            [name]: name === "image" ? files[0] : value,
        });
    };
    const handleDeleteCarouselItem = async (id) => {
        await fetch(`http://localhost:8000/api/carousel/${id}/`, {
            method: 'DELETE',
        });
        setCarousel(carousel.filter(item => item.id !== id)); // Update local state
    };
    
    // Handle Update Carousel Item
    const handleUpdateCarouselItem = async () => {
        const response = await fetch(`http://localhost:8000/api/carousel/${editingCarouselItem.id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editingCarouselItem),
        });
        const data = await response.json();
        setCarousel(carousel.map(item => (item.id === data.id ? data : item))); // Update local state
        setEditingCarouselItem(null); // Reset editing state
    };
    const handleCarouselOneChange = (e) => {
        const { name, value, files } = e.target;
        setNewCarouselOne({
            ...newCarouselOne,
            [name]: name === "image" ? files[0] : value,
        });
    };

    const handleDeleteCarouselOneItem = async (id) => {
        await fetch(`http://localhost:8000/api/carouselOne/${id}/`, {
            method: 'DELETE',
        });
        setCarouselOne(carouselOne.filter(item => item.id !== id)); // Update local state
    };
    

    const handleUpdateCarouselOneItem = async () => {
        const response = await fetch(`http://localhost:8000/api/carouselOne/${editingCarouselOneItem.id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editingCarouselOneItem),
        });
        const data = await response.json();
        setCarouselOne(carouselOne.map(item => (item.id === data.id ? data : item))); // Update local state
        setEditingCarouselOneItem(null); // Reset editing state
    };
    return (
        <div className="p-4">
            <h1 className="text-4xl">Admin</h1>
         {/* Show success message */}
         {successMessage && (
  <div
    className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md animate-fade-in-out"
  >
    {successMessage}
  </div>
)}
            {/* Products One Form */}
            <div className="p-8 bg-white flex flex-row justify-between">
    <div className="mb-8 ">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pr-2">
            <input
                type="text"
                name="name"
                value={newProductOne.name}
                onChange={handleProductOneChange}
                placeholder="Product Name"
                className="px-4 py-2 border-b-4 border-gray-300 rounded-md w-full  placeholder:text-sm"
            />
            <input
                type="number"
                name="price"
                value={newProductOne.price}
                onChange={handleProductOneChange}
                placeholder="Price"
                className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
            />
            <input
                type="text"
                name="description"
                value={newProductOne.description}
                onChange={handleProductOneChange}
                placeholder="Description"
                className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full placeholder:text-sm"
            />
            <input
                type="text"
                name="color"
                value={newProductOne.color}
                onChange={handleProductOneChange}
                placeholder="Color"
                className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
            />
            <input
                type="text"
                name="size"
                value={newProductOne.size}
                onChange={handleProductOneChange}
                placeholder="Size"
                className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
            />
            <select
                name="category"
                value={newProductOne.category}
                onChange={handleProductOneChange}
                className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
            >
                <option value="" disabled>
                    Select a category
                </option>
                <option value="Dresses">Dresses</option>
                <option value="Tops">Tops</option>
                <option value="Core">Core</option>
                <option value="Knitwear">Knitwear</option>
            </select>
            <input
                type="file"
                name="image"
                onChange={handleProductOneChange}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
        </div>
        <button
            onClick={() => handleAdd(newProductOne, "products_one")}
            className="mt-4 w-full bg-[#198754] text-white px-6 py-3 rounded-md hover:bg-green-600"
        >
            Add Product
        </button>
    </div>
<div>
    <h2 className="text-xl font-semibold mb-4">Products List</h2>
    <table className="w-full bg-white overflow-hidden">
        <thead>
            <tr className="bg-[#343a40] text-white text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">Size</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {productsOne.map((product,index) => (
                <tr key={product.id} 
                className={index % 2 === 0 ? 'border bg-gray-50' : 'bg-white'} // Alternating rows
                >
                    <td className="px-4 py-2 text-gray-600 text-sm">{product.name}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{product.price}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{product.description}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{product.color}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{product.size}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm">{product.category}</td>
                    <td className="px-4 py-2 text-gray-600 text-sm flex space-x-2">
                        <button
                            onClick={() => setEditingProduct(product)}
                            className="bg-[#0dcaf0] text-white px-4 py-2 rounded-md hover:bg-blue-400"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="bg-[#dc3545]  text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    {editingProduct && (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Update Product</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                        setEditingProduct({ ...editingProduct, name: e.target.value })
                    }
                    placeholder="Name"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                    type="text"
                    value={editingProduct.price}
                    onChange={(e) =>
                        setEditingProduct({ ...editingProduct, price: e.target.value })
                    }
                    placeholder="Price"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                    type="text"
                    value={editingProduct.description}
                    onChange={(e) =>
                        setEditingProduct({ ...editingProduct, description: e.target.value })
                    }
                    placeholder="Description"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                    type="text"
                    value={editingProduct.color}
                    onChange={(e) =>
                        setEditingProduct({ ...editingProduct, color: e.target.value })
                    }
                    placeholder="Color"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                    type="text"
                    value={editingProduct.size}
                    onChange={(e) =>
                        setEditingProduct({ ...editingProduct, size: e.target.value })
                    }
                    placeholder="Size"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <select
                    id="category"
                    value={editingProduct.category}
                    onChange={(e) =>
                        setEditingProduct({ ...editingProduct, category: e.target.value })
                    }
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                >
                    <option value="" disabled>
                        Select a category
                    </option>
                    <option value="Dresses">Dresses</option>
                    <option value="Tops">Tops</option>
                    <option value="Core">Core</option>
                    <option value="Knitwear">Knitwear</option>
                </select>
                <input
                    type="file"
                    onChange={(e) =>
                        setEditingProduct({
                            ...editingProduct,
                            image: e.target.files[0],
                        })
                    }
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <button
                onClick={handleUpdateProduct}
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
                Update Product
            </button>
        </div>
    )}</div>
</div>


            {/* Products Two Form */}
        
            <div className="p-8 bg-gray-50 flex flex-row justify-between">
            <div className="mb-8 ">
            <h2 className="text-xl font-semibold mb-4">Add New Product 2</h2>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pr-2">
    <input
      type="text"
      name="name"
      value={newProductTwo.name}
      onChange={handleProductTwoChange}
      placeholder="Product Name"
      className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    <input
      type="number"
      name="price"
      value={newProductTwo.price}
      onChange={handleProductTwoChange}
      placeholder="Price"
      className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    <input
      type="text"
      name="description"
      value={newProductTwo.description}
      onChange={handleProductTwoChange}
      placeholder="Description"
      className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    <input
      type="text"
      name="color"
      value={newProductTwo.color}
      onChange={handleProductTwoChange}
      placeholder="Color"
      className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    <input
      type="text"
      name="size"
      value={newProductTwo.size}
      onChange={handleProductTwoChange}
      placeholder="Size"
      className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    <select
      name="category"
      value={newProductTwo.category}
      onChange={handleProductTwoChange}
      className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full text-sm placeholder:text-sm"
    >
      <option value="" disabled>
        Select a category
      </option>
      <option value="Dresses">Dresses</option>
      <option value="Tops">Tops</option>
      <option value="Core">Core</option>
      <option value="Knitwear">Knitwear</option>
    </select>
    <input
      type="file"
      name="image"
      value={newProductTwo.image}
      onChange={handleProductTwoChange}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <button
    onClick={() => handleAdd(newProductTwo, "products_two")}
    className="mt-4 w-full bg-[#198754] text-white py-3 px-4 rounded-md hover:bg-green-600"
  >
    Add Product
  </button>
  </div>
  
<div>
  <h2 className="text-xl font-bold  mb-4 text-gray-700">Products List</h2>
  <table className="w-full  bg-white overflow-hidden">
    <thead className="bg-[#343a40] text-white">
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Price</th>
        <th className="px-4 py-2">Description</th>
        <th className="px-4 py-2">Color</th>
        <th className="px-4 py-2">Size</th>
        <th className="px-4 py-2">Category</th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {productsTwo.map((product,index) => (
        <tr
          key={product.id}
          className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} // Alternating rows
        >
          <td className="px-4 py-2 text-gray-600 text-sm">{product.name}</td>
          <td className="px-4 py-2 text-gray-600 text-sm">{product.price}</td>
          <td className="px-4 py-2 text-gray-600 text-sm">{product.description}</td>
          <td className="px-4 py-2 text-gray-600 text-sm">{product.color}</td>
          <td className="px-4 py-2 text-gray-600 text-sm">{product.size}</td>
          <td className="px-4 py-2 text-gray-600 text-sm">{product.category}</td>
          <td className="px-4 py-2 text-gray-600 text-sm flex gap-2">
            <button
              onClick={() => setEditingProductTwo(product)}
              className="px-4 py-2 bg-[#0dcaf0]  text-white rounded-md hover:bg-blue-400"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProductTwo(product.id)}
              className="px-4 py-2 bg-[#dc3545]  text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {editingProductTwo && (
    <div className="mt-6 p-4 border border-gray-300 rounded-md bg-white">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Update Product</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <input
          type="text"
          value={editingProductTwo.name}
          onChange={(e) =>
            setEditingProductTwo({ ...editingProductTwo, name: e.target.value })
          }
          placeholder="Name"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={editingProductTwo.price}
          onChange={(e) =>
            setEditingProductTwo({
              ...editingProductTwo,
              price: e.target.value,
            })
          }
          placeholder="Price"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={editingProductTwo.description}
          onChange={(e) =>
            setEditingProductTwo({
              ...editingProductTwo,
              description: e.target.value,
            })
          }
          placeholder="Description"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={editingProductTwo.color}
          onChange={(e) =>
            setEditingProductTwo({ ...editingProductTwo, color: e.target.value })
          }
          placeholder="Color"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={editingProductTwo.size}
          onChange={(e) =>
            setEditingProductTwo({ ...editingProductTwo, size: e.target.value })
          }
          placeholder="Size"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={editingProductTwo.category}
          onChange={(e) =>
            setEditingProductTwo({
              ...editingProductTwo,
              category: e.target.value,
            })
          }
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Dresses">Dresses</option>
          <option value="Tops">Tops</option>
          <option value="Core">Core</option>
          <option value="Knitwear">Knitwear</option>
        </select>
        <input
          type="file"
          onChange={(e) =>
            setEditingProductTwo({
              ...editingProductTwo,
              image: e.target.files[0],
            })
          }
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleUpdateProductTwo}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Update Product
      </button>
    </div>

  )}</div>
</div>


            {/* Products Three Form */}
            <div></div>
            {/* <h1 className="flex-none block text-3xl font-semibold text-gray-800">Product 3</h1> */}

            <div className=" flex flex-row justify-between p-6 bg-white">
            <div className="mb-8 ">
            <h2 className="text-xl font-semibold mb-4">Add New Product 3</h2>
               
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pr-2 ">
                  
                    <input
                        type="text"
                        name="name"
                        value={newProductThree.name}
                        onChange={handleProductThreeChange}
                        placeholder="Product Name"
                        className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
                    />
                    <input
                        type="number"
                        name="price"
                        value={newProductThree.price}
                        onChange={handleProductThreeChange}
                        placeholder="Price"
                        className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
                    />
                    <input
                        type="text"
                        name="description"
                        value={newProductThree.description}
                        onChange={handleProductThreeChange}
                        placeholder="Description"
                        className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
                    />
                    <input
                        type="text"
                        name="color"
                        value={newProductThree.color}
                        onChange={handleProductThreeChange}
                        placeholder="Color"
                        className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
                    />
                    <input
                        type="text"
                        name="size"
                        value={newProductThree.size}
                        onChange={handleProductThreeChange}
                        placeholder="Size"
                        className="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
                    />
                    <select
                        name="category"
                        value={newProductThree.category}
                        onChange={handleProductThreeChange}
                        className="px-4 py-2 border-b-4  border-gray-300 rounded-md text-sm w-full  placeholder:text-sm"
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Tops">Tops</option>
                        <option value="Core">Core</option>
                        <option value="Knitwear">Knitwear</option>
                    </select>
                    <input
                        type="file"
                        name="image"
                        onChange={handleProductThreeChange}
                        placeholder="Image"
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    </div>
                    <button
                        onClick={() => handleAdd(newProductThree, "products_three")}
                        className="w-full py-3 bg-[#198754] text-white rounded-md hover:bg-grrn-700 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
                    >
                        Add Product
                    </button>
                </div>
                
                
                
            <div>
                <h2 className="text-xl font-semibold text-gray-800">Product List</h2>
                <table className="w-full bg-white overflow-hidden">
                    <thead>
                        <tr className="bg-[#343a40] text-white">
                            <th className="px-4 py-2  ">Name</th>
                            <th className="px-4 py-2  ">Price</th>
                            <th className="px-4 py-2  ">Description</th>
                            <th className="px-4 py-2  ">Color</th>
                            <th className="px-4 py-2  ">Size</th>
                            <th className="px-4 py-2  ">Category</th>
                            <th className="px-4 py-2  ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsThree.map((product,index) => (
                            <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} // Alternating rows
                            >
                                <td className="px-4 py-2  text-gray-600 text-sm">{product.name}</td>
                                <td className="px-4 py-2  text-gray-600 text-sm">{product.price}</td>
                                <td className="px-4 py-2  text-gray-600 text-sm">{product.description}</td>
                                <td className="px-4 py-2  text-gray-600 text-sm">{product.color}</td>
                                <td className="px-4 py-2  text-gray-600 text-sm">{product.size}</td>
                                <td className="px-4 py-2  text-gray-600 text-sm">{product.category}</td>
                                <td className="px-4 py-2  text-gray-600 text-sm flex space-x-2">
                                    <button
                                        onClick={() => setEditingProductThree(product)}
                                        className="px-4 py-2 bg-[#0dcaf0]  text-white rounded-md hover:bg-blue-400"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProductThree(product.id)}
                                        className="px-4 py-2 bg-[#dc3545] text-white rounded-md hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
                {/* Update Product Form */}
                {editingProductThree && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Update Product</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input
                                type="text"
                                value={editingProductThree.name}
                                onChange={(e) => setEditingProductThree({ ...editingProductThree, name: e.target.value })}
                                placeholder="Name"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                value={editingProductThree.price}
                                onChange={(e) => setEditingProductThree({ ...editingProductThree, price: e.target.value })}
                                placeholder="Price"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                value={editingProductThree.description}
                                onChange={(e) => setEditingProductThree({ ...editingProductThree, description: e.target.value })}
                                placeholder="Description"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                value={editingProductThree.color}
                                onChange={(e) => setEditingProductThree({ ...editingProductThree, color: e.target.value })}
                                placeholder="Color"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                value={editingProductThree.size}
                                onChange={(e) => setEditingProductThree({ ...editingProductThree, size: e.target.value })}
                                placeholder="Size"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                                value={editingProductThree.category}
                                onChange={(e) => setEditingProductThree({ ...editingProductThree, category: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>Select a category</option>
                                <option value="Dresses">Dresses</option>
                                <option value="Tops">Tops</option>
                                <option value="Core">Core</option>
                                <option value="Knitwear">Knitwear</option>
                            </select>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setEditingProductThree({ ...editingProductThree, image: e.target.files[0] })
                                }
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            onClick={handleUpdateProductThree}
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Update Product
                        </button>
                    </div>
                    
                )}
                </div>
            </div>
            


            {/* Carousel Form */}
            <div class="p-6 bg-slate-50 rounded-lg shadow-md grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <h2 class="col-span-3 text-2xl font-semibold">Add Carousel Item</h2>
    
    <input
        type="text"
        name="name"
        value={newCarousel.name}
        onChange={handleCarouselChange}
        placeholder="Name"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full placeholder:text-sm"
    />

    <input
        type="text"
        name="price"
        value={newCarousel.price}
        onChange={handleCarouselChange}
        placeholder="Price"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />

    <input
        type="text"
        name="color"
        value={newCarousel.color}
        onChange={handleCarouselChange}
        placeholder="Color"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />

    <input
        type="text"
        name="description"
        value={newCarousel.description}
        onChange={handleCarouselChange}
        placeholder="Description"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />

    <input
        type="text"
        name="size"
        value={newCarousel.size}
        onChange={handleCarouselChange}
        placeholder="Size"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    
    <select
        name="category"
        value={newCarousel.category}
        onChange={handleCarouselChange}
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    >
        <option value="" disabled>Select a category</option>
        <option value="Dresses">Dresses</option>
        <option value="Tops">Tops</option>
        <option value="Core">Core</option>
        <option value="Knitwear">Knitwear</option>
    </select>
    
    <input
        type="file"
        name="image"
        onChange={handleCarouselChange}
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    
    <button
        onClick={() => handleAdd(newCarousel, "carousel")}
        class="col-span-3 py-2 bg-[#198754] text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
        Add Carousel Item
    </button>
</div>

      {/* Carousel Form */}
            <div class="p-6 bg-white rounded-lg shadow-md grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <h2 class="col-span-3 text-2xl font-semibold">Add CarouselOne Item</h2>
    
    <input
        type="text"
        name="name"
        value={newCarouselOne.name}
        onChange={handleCarouselOneChange}
        placeholder="Name"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />

    <input
        type="text"
        name="price"
        value={newCarouselOne.price}
        onChange={handleCarouselOneChange}
        placeholder="Price"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />

    <input
        type="text"
        name="color"
        value={newCarouselOne.color}
        onChange={handleCarouselOneChange}
        placeholder="Color"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />

    <input
        type="text"
        name="description"
        value={newCarouselOne.description}
        onChange={handleCarouselOneChange}
        placeholder="Description"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />

    <input
        type="text"
        name="size"
        value={newCarouselOne.size}
        onChange={handleCarouselOneChange}
        placeholder="Size"
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    
    <select
        name="category"
        value={newCarouselOne.category}
        onChange={handleCarouselOneChange}
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    >
        <option value="" disabled>Select a category</option>
        <option value="Dresses">Dresses</option>
        <option value="Tops">Tops</option>
        <option value="Core">Core</option>
        <option value="Knitwear">Knitwear</option>
    </select>
    
    <input
        type="file"
        name="image"
        onChange={handleCarouselOneChange}
        class="px-4 py-2 border-b-4  border-gray-300 rounded-md w-full  placeholder:text-sm"
    />
    
    <button
        onClick={() => handleAdd(newCarouselOne, "carouselOne")}
        class="col-span-3 py-2 bg-[#198754] text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
        Add CarouselOne Item
    </button>
</div>          

            
        </div>
    );
};

export default Admin;
