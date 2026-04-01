# Poultry Farm Management System

This is a comprehensive REST API and Client application prototype built to monitor and manage a poultry farm. It was developed to follow agile methodologies and RESTful API practices.

## Technologies Used
- Backend: Node.js, Express.js
- Database: SQLite3
- Tooling/Middleware: Express-Validator, apidoc, Jest, Supertest
- Frontend: React 18, Vite, CSS Glassmorphism styling, Testcafe

## Project Structure
```text
poultry-farm-system/
│
├── api/
│   ├── app.js                       # API Entry point
│   ├── package.json                 # Dependencies and NPM Scripts
│   ├── apidoc.json                  # Apidoc config
│   ├── controllers/                 # Controllers mapping routes to models (e.g. chickenController.js)
│   ├── database/                    # Contains sqlite3 database module and initialization script
│   │   ├── database.js
│   │   └── init.js                  # Run this to seed 20 realistic models
│   ├── middleware/                  # Express validation checks (validator.js)
│   ├── models/                      # SQLite3 interactions (chickenModel.js)
│   ├── routes/                      # API endpoint definitions (chickenRoutes.js)
│   └── tests/                       # Jest testing suite for logic testing
│
├── client/
│   ├── index.html                   # HTML Entry template
│   ├── package.json                 # React Vite Dependencies
│   ├── src/                         
│   │   ├── App.jsx                  # Main UI - Dashboard, Tables, Forms
│   │   ├── main.jsx                 # React root renderer
│   │   └── index.css                # Glassmorphism dynamic UI variables
│   └── tests/                       # TestCafe integration suite
│
├── README.md                        # Documentation requirements
```

## Running the Project

### 1. Setup Backend API
1. Navigate to the api directory:
   ```bash
   cd api
   ```
2. Install tools:
   ```bash
   npm install
   ```
3. Initialize the database and seed the mock data (at least 20 items):
   ```bash
   npm run db:init
   ```
4. Build documentation:
   ```bash
   npm run docs
   ```
5. Start backend development server:
   ```bash
   npm run dev
   ```
   > The API will be available at `http://localhost:3000`
   > API docs reachable at `http://localhost:3000/apidoc`

### 2. Setup Client Side
1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install frontend frameworks:
   ```bash
   npm install
   ```
3. Run Local Dev Server
   ```bash
   npm run dev
   ```
   > The React app will stream to `http://localhost:5173`. Make sure the Node API backend server is active first!

### 3. Testing
**API Testing (Jest/Supertest)**
In the `api/` directory:
```bash
npm run test
```
**Frontend Client Navigation Tests (TestCafe)**
In the `client/` directory, while server is running:
```bash
npm run test
```

## Features Delivered
- **Full CRUD API Validation** 
- **Extensible SQLite Base Pattern**. Modular controllers/validation map correctly over any entity (Feed/Eggs/Staff) following the Chicken architecture format.
- **Glassmorphism App Theme**, ensuring UI rich fidelity and color harmonization. Default error states included to address missing backend checks gracefully.
