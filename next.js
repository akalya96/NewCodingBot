"use client";
import React, { useState } from 'react';
import styles from '../styles/Homepage.module.css';

const Dashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple iPhone 13', price: 999, stock: 50 },
    { id: 2, name: 'Samsung Galaxy S21', price: 799, stock: 30 },
    { id: 3, name: 'Google Pixel 6', price: 599, stock: 20 },
    { id: 4, name: 'Sony WH-1000XM4', price: 349, stock: 40 },
    { id: 5, name: 'Dell XPS 13', price: 1099, stock: 15 },
    { id: 6, name: 'MacBook Pro 14"', price: 1999, stock: 10 },
    { id: 7, name: 'iPad Air', price: 599, stock: 25 },
    { id: 8, name: 'Samsung Galaxy Tab S7', price: 649, stock: 12 },
    { id: 9, name: 'Amazon Echo Dot', price: 49, stock: 100 },
    { id: 10, name: 'Fitbit Charge 5', price: 149, stock: 75 },
  ]);

  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  const handleFilter = (e) => setFilter(e.target.value);
  const handleSort = (e) => {
    const [field, order] = e.target.value.split('-');
    setSortField(field);
    setSortOrder(order);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      setProducts([...products, { ...newProduct, id: newId, price: +newProduct.price, stock: +newProduct.stock }]);
      setNewProduct({ name: '', price: '', stock: '' });
    }
  };

  const sortedProducts = [...products]
    .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => sortOrder === 'asc' ? (a[sortField] > b[sortField] ? 1 : -1) : (a[sortField] < b[sortField] ? 1 : -1));

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2>Dashboard Menu</h2>
        <ul><li>Product List</li><li>Add Product</li><li>Orders</li><li>Customers</li><li>Reports</li><li>Settings</li></ul>
      </aside>

      <main className={styles.mainContent}>
        <h1>Product Dashboard</h1>
        <div className={styles.filterContainer}>
          <input type="text" placeholder="Filter by name" onChange={handleFilter} />
          <select onChange={handleSort}>
            <option value="name-asc">Sort by Name (A-Z)</option>
            <option value="name-desc">Sort by Name (Z-A)</option>
            <option value="price-asc">Sort by Price (Low to High)</option>
            <option value="price-desc">Sort by Price (High to Low)</option>
            <option value="stock-asc">Sort by Stock (Low to High)</option>
            <option value="stock-desc">Sort by Stock (High to Low)</option>
          </select>
        </div>

        <table>
          <thead>
            <tr><th>Name</th><th>Price</th><th>Stock</th></tr>
          </thead>
          <tbody>
            {sortedProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={handleAddProduct}>
          <input type="text" name="name" value={newProduct.name} placeholder="Product Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
          <input type="number" name="price" value={newProduct.price} placeholder="Price" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
          <input type="number" name="stock" value={newProduct.stock} placeholder="Stock" onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
          <button type="submit">Add Product</button>
        </form>
      </main>
    </div>
  );
};

export default Dashboard;