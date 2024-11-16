# Load Balancing Microservices Project

## Overview

This project demonstrates the implementation of a load-balanced microservices architecture using Node.js, Express, Docker, and NGINX. The application is designed to handle multiple services, including user management, product management, and order processing, while distributing incoming requests efficiently across multiple service instances.

## Features

- **Microservices Architecture**: The application is structured into distinct services: 
  - **User Service**: Manages user-related operations such as registration, login, and profile management.
  - **Product Service**: Handles product-related operations including adding, updating, and retrieving product information.
  - **Order Service**: Manages order processing and tracking for users.
  
- **Load Balancing**: Utilizes NGINX as a reverse proxy to distribute incoming requests across multiple service instances, ensuring high availability and responsiveness.

- **Dockerized Services**: Each service is containerized using Docker, allowing for easy deployment, scaling, and management of service dependencies.

- **RESTful API**: All services expose RESTful APIs for interaction, enabling integration with frontend applications and other services.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js that simplifies API development.
- **Docker**: Platform for developing, shipping, and running applications in containers.
- **NGINX**: High-performance web server and reverse proxy server used for load balancing.
- **JavaScript**: Programming language used for backend development.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/en/) (for local development and testing)
- [Postman](https://www.postman.com/) (for testing API endpoints)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RaiDevX8/Nodejs_loadBalancer.git
   cd Nodejs_loadBalancer
   ```

2. Build and run the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Access the application at `http://localhost` and use Postman to interact with the API endpoints:
   - Users: `http://localhost/users`
   - Products: `http://localhost/products`
   - Orders: `http://localhost/orders`

### API Endpoints

- **User Service**:
  - `POST /users`: Create a new user
  - `GET /users`: Retrieve all users
- **Product Service**:
  - `POST /products`: Add a new product
  - `GET /products`: Retrieve all products
- **Order Service**:
  - `POST /orders`: Create a new order
  - `GET /orders`: Retrieve all orders

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for discussion.



