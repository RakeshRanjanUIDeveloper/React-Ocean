import React from 'react';
import styles from '../styles/AddProduct.module.css';

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <h1>Add New Product</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="department">Department:</label>
          <select id="department" name="department" className={styles.select}>
            <option value="">Select Department</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" className={styles.textarea}></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" defaultValue="0" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" defaultValue="0" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="sku">SKU:</label>
          <input type="text" id="sku" name="sku" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="supplier">Supplier:</label>
          <input type="text" id="supplier" name="supplier" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="delivered">Delivered:</label>
          <input type="number" id="delivered" name="delivered" defaultValue="0" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" name="imageUrl" className={styles.input} />
        </div>

        <button type="submit" className={styles.button}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;