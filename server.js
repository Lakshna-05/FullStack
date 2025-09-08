const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ecommerce API is running');
});

const products = [
  { id: 1, name: 'Product A', category: 'Electronics', price: 100 },
  { id: 2, name: 'Product B', category: 'Clothing', price: 50 },
  { id: 3, name: 'Product C', category: 'Electronics', price: 200 },
  // Add more products as needed
];

app.get('/api/products', (req, res) => {
  const { category, minPrice, maxPrice } = req.query;
  let filtered = products;
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (minPrice) {
    filtered = filtered.filter(p => p.price >= parseInt(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= parseInt(maxPrice));
  }
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});