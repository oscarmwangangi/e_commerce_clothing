import { useState, useEffect } from "react";
const fetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
const useAdmin = () => {
     // States to manage CRUD operations for all tables
     const [productsOne, setProductsOne] = useState([]);
     const [productsTwo, setProductsTwo] = useState([]);
     const [productsThree, setProductsThree] = useState([]);
     const [carousel, setCarousel] = useState([]);
     const [editingProduct, setEditingProduct] = useState(null);
     const [editingProductTwo, setEditingProductTwo] = useState(null);
     const [editingProductThree, setEditingProductThree] = useState(null);
     const [editingCarouselItem, setEditingCarouselItem] = useState(null);
 
 
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
 
     // Fetch data for all tables when component mounts
     useEffect(() => {
         fetchData("/api/products_one/").then((data) => setProductsOne(data));
         fetchData("/api/products_two/").then((data) => setProductsTwo(data));
         fetchData("/api/products_three/").then((data) => setProductsThree(data));
         fetchData("/api/carousel/").then((data) => setCarousel(data));
     }, []);
 
     // Handle Add operation for all tables
     const [successMessage, setSuccessMessage] = useState(""); // State to hold success message
 
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
     return {
        productsOne,
        newProductOne,
        successMessage,
        handleProductOneChange,
        handleAdd,
        setEditingProduct,
        handleDeleteProduct,
        handleUpdateProduct,
        handleProductTwoChange,
        handleUpdateProductTwo,
        handleProductThreeChange,
        handleDeleteProductThree,
        handleUpdateProductThree,
        handleCarouselChange,
        handleDeleteCarouselItem,
        setProductsOne,
        setNewProductOne,
    };
    }
     
export default useAdmin;
