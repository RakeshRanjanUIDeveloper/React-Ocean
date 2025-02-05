import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
  const { data } = useFetchData();
  const { department } = useParams();
  const navigate = useNavigate();
  const [showLowStock, setShowLowStock] = useState(false);
  const [sortBy, setSortBy] = useState();

  const productList =
    department === 'All' ? data :
    data.filter((product) => product.department === department);

  const uniqueDepartments = [...new Set(data.map((d) => d.department))];

  const handleDepartment = (selectedDepartment) => {
    navigate(`/Products/${selectedDepartment}`);
  };

  const handleCheckbox = (e) => {
    console.log(e.target.checked);
    setShowLowStock(e.target.checked);
  };

  const filteredProducts = showLowStock
    ? productList.filter((product) => product.stock <= 10)
    : productList;

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
  };

  const sortedProducts = (() => {
    if (sortBy === 'name') {
      return [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'stock') {
      return [...filteredProducts].sort((a, b) => a.stock - b.stock);
    }
    return filteredProducts;
  })();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Products From {department} Department</h2>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label htmlFor="departments">Select Department</label>
          <select onChange={(e) => handleDepartment(e.target.value)}>
            <option value="All">All Departments</option>
            {uniqueDepartments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <input type="checkbox" name="stock" onChange={handleCheckbox} />
          <label htmlFor="stock">Low Stock items</label>
        </div>

        <div className={styles.filterGroup}>
          <label>Sort By :</label>
          <select onChange={handleSort}>
            <option value="">Select Sorting</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </td>
                <td>
                  <Link
                    to={`/Product/${product.id}`}
                    className={styles.productLink}
                  >
                    {product.name}
                  </Link>
                </td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock}</td>
                <td>{product.supplier}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
