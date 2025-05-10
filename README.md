
# Mini E-Commerce Platform with Two Tabs

This project is a simple e-commerce product management application, allowing users to create, view, and manage products.

## Setup Instructions
To run this project locally, please follow these steps:

**1. Clone the repository:**

   ```bash
   git clone https://github.com/jyotsana02841/E-Commerce.git
   cd E-Commerce
   ```

**2. Setup the backend (Node.js with Express):**

   ```bash
   cd backend
   npm install
   ```
   * **Set up the PostgreSQL database:**
      - Ensure you have PostgreSQL installed and running.  
      - Create a database named ecommerce_db.  
      -  Update the database connection details in backend/  database/db.js with your PostgreSQL username and password.
   - Run the backend server:
```bash
   
   nodemon server.js
```
**3. Set up the frontend (React with Vite):**
```bash
cd frontend
npm install
npm run dev
```
* This will start the development server for the frontend, usually at http://localhost:5173

**4. Access the application:**

* Open your web browser and go to http://localhost:5173 to view the frontend of the application.

**What's Working**  
The following features have been implemented:

* Product Creation: Users can add new products to the database by providing a name, price, description, and image URL.

* Product Listing: The application displays a list of products, showing their name, price, and description.

* Product Card: Products are displayed in a visually appealing card format.

* Backend API: The backend server provides a RESTful API with endpoints for creating and retrieving products.

* Database Integration: The application uses PostgreSQL to store product data.

* Frontend-Backend Interaction: The frontend sends requests to the backend API to manage products.

* Image Display: Product images are displayed using the provided URL.