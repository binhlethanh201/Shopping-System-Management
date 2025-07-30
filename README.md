# React Shopping System Management

This repository contains a modern React shopping management application built with React Bootstrap for UI components and JSON Server for backend simulation. The app features a complete e-commerce experience including product browsing, category filtering, shopping cart management, order processing, and order history tracking. It demonstrates React component architecture, state management, RESTful API integration, and responsive design for a modern shopping management platform.

## Prerequisites

- Node.js and npm installed on your system
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- (Optional) A code editor like VS Code, Sublime Text, or Atom for easier code navigation

## Installation

1. **Clone the repository** (if not already downloaded):
   ```sh
   git clone <repository-url>
   cd Shopping-System-Management-main
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```

## How to Run

1. **Start the JSON Server** (backend simulation):
   ```sh
   npx json-server --watch database.json --port 9999
   ```

2. **Start the React development server** (in a new terminal):
   ```sh
   npm start
   ```

This will open the app in your default browser at [http://localhost:3000](http://localhost:3000). The main page displays the products catalog, and you can navigate to `/orders` to view order history. The page will reload automatically when you make changes to the source code.

**Note**: Make sure both the JSON Server (port 9999) and React development server (port 3000) are running simultaneously for the application to work properly.

## Project Structure

```
Shopping-System-Management-main/
├── database.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── products.jsx
│   │   └── orders.jsx
│   ├── App.js
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

- **database.json**: Mock database containing products with reviews and orders for the JSON Server.
- **public/**: Contains static assets and the HTML template.
  - `index.html`: The main HTML file loaded by React.
  - `manifest.json`, `robots.txt`: Standard web app metadata and configuration.
- **src/**: Contains the React source code.
  - `components/`: Reusable React components for different sections of the app.
    - `products.jsx`: Main product catalog component with browsing, filtering, cart management, and checkout functionality.
    - `orders.jsx`: Order history component displaying all past orders with details.
  - `App.js`: Main application component that sets up routing and renders the shopping interface.
  - `index.js`: Entry point that renders the React app.
- **package.json**: Project metadata and dependencies including React, React Bootstrap, React Router, and JSON Server.
- **README.md**: Project documentation (this file).

## Features

- **Product Catalog**: Display products in a clean card format with comprehensive details including title, category, price, and average rating
- **Category Filtering**: Filter products by specific categories (beauty, electronics, clothing, etc.)
- **Product Reviews**: View detailed customer reviews with ratings and comments for each product
- **Shopping Cart Management**: Add products to cart, adjust quantities, and remove items
- **Order Processing**: Complete checkout process with shipping address validation
- **Order History**: View all past orders with detailed product lists and total prices
- **Responsive Design**: Modern, responsive interface built with Bootstrap for optimal viewing on all devices
- **Real-time Updates**: Dynamic data updates with JSON Server backend simulation
- **Interactive UI**: Clean card-based layout with action buttons and filtering controls
- **Navigation**: Easy navigation between product catalog and order history

## Data Structure

The application manages the following data entities:

- **Products**: Product items with id, title, category, price, and reviews array
- **Reviews**: Customer reviews with rating, comment, date, and reviewer name
- **Orders**: Order information with id, order date, shipping address, products array, and calculated total price
- **Cart Items**: Temporary cart data with product details and quantities

## Technologies Used

- **React 18.2.0**: Modern React with hooks and functional components
- **React Bootstrap 2.10.2**: Bootstrap components built for React
- **Bootstrap 5.3.3**: CSS framework for responsive design and UI components
- **React Router DOM 6.13.0**: Client-side routing for navigation
- **JSON Server 0.17.3**: Mock REST API backend for development
- **React Scripts 5.0.1**: Development and build tools
- **Axios 1.6.7**: HTTP client for API requests

## API Endpoints

The application uses the following API endpoints:

### Local JSON Server
- `GET /products` - Retrieve all products with reviews
- `POST /orders` - Create new order
- `GET /orders` - Retrieve all orders

## Features in Detail

### Product Management (`products.jsx`)
- Displays products in responsive card layout with comprehensive product information
- Category-based filtering with dropdown selection
- Product reviews display with average rating calculation
- Shopping cart functionality with add, remove, and quantity adjustment
- Checkout process with shipping address validation
- Real-time data updates with JSON Server integration
- Responsive design with Bootstrap styling
- Form validation and user feedback messages

### Order Management (`orders.jsx`)
- Displays complete order history in table format
- Order details including order ID, date, shipping address, and product list
- Product breakdown within each order showing individual items and quantities
- Total price calculation for each order
- Date formatting for better readability
- Responsive table layout with nested product tables

### Product Information Displayed

Each product includes comprehensive information:
- **Basic Details**: ID, title, category, and price
- **Customer Reviews**: Multiple reviews with ratings, comments, and reviewer names
- **Average Rating**: Calculated average rating from all customer reviews
- **Category Classification**: Product categorization for filtering

### Shopping Cart Features

The application provides complete shopping cart functionality:
- **Add to Cart**: Add products with quantity selection
- **Cart Management**: View cart contents, adjust quantities, and remove items
- **Cart Validation**: Ensure cart is not empty before checkout
- **Checkout Process**: Complete order placement with shipping address
- **Order Confirmation**: Success messages and cart clearing after order placement

### Filtering and Navigation Features

The application provides intuitive filtering and navigation:
- **Category Filtering**: Dropdown selection to filter products by category
- **Show All Products**: Reset filters to display all products
- **Navigation**: Easy switching between product catalog and order history
- **Responsive Layout**: Card-based design that adapts to different screen sizes

## User Experience Flow

1. **Product Browsing**: Users view all available products in a clean card format
2. **Category Filtering**: Users can filter products by specific categories using the dropdown
3. **Product Details**: Users can view detailed product information including customer reviews
4. **Shopping Cart**: Users can add products to cart, adjust quantities, and manage cart contents
5. **Checkout**: Users complete the purchase by providing shipping address
6. **Order History**: Users can view all past orders with detailed information
7. **Data Persistence**: All orders are saved to the JSON Server database

## Development Notes

- The application uses JSON Server for local data management and API simulation
- React hooks (useState, useEffect) manage component state and side effects
- React Router handles navigation between different views
- Bootstrap provides responsive design and card/table styling
- Fetch API handles all HTTP requests to the local JSON Server
- Component-based architecture ensures maintainable and scalable code
- Form validation ensures data integrity before order submission

## Learn More

- [React Documentation](https://reactjs.org/)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [React Router Documentation](https://reactrouter.com/)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)

For questions or contributions, please open an issue or pull request.
