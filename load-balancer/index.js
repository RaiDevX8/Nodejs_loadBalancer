const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const proxy = httpProxy.createProxyServer();
const PORT = process.env.PORT || 3000;

const services = {
  users: 'http://localhost:3001',
  products: 'http://localhost:3002',
  orders: 'http://localhost:3003',
  payments: 'http://localhost:3004',
};

app.use((req, res) => {
  if (req.url.startsWith('/users')) {
    proxy.web(req, res, { target: services.users });
  } else if (req.url.startsWith('/products')) {
    proxy.web(req, res, { target: services.products });
  } else if (req.url.startsWith('/orders')) {
    proxy.web(req, res, { target: services.orders });
  } else if (req.url.startsWith('/payments')) {
    proxy.web(req, res, { target: services.payments });
  } else {
    res.status(404).send('Service not found');
  }
});

app.listen(PORT, () => {
  console.log(`Load Balancer running on port ${PORT}`);
});
