# Agile Kanban Board

Here's the simulated Trello-style board structure for the Poultry Farm project:

## Columns

### 1. To Do
- **Story:** "As a farm worker, I want to record daily egg collections so I can track productivity."
- **Story:** "As an admin, I want to track the total amount of Feed remaining in inventory so I can order more."
- **Task:** Implement client-side sorting and pagination on the tables.
- **Task:** Integrate user authentication (JWT tokens).
- **Task:** Finalize API tests for Eggs and Feed endpoints.

### 2. Doing
- **Story:** "As a system admin, I want to access apidoc documentation to understand the endpoints."
- **Task:** Write Jest logic verification tests for Chicken models mapping correctly to the SQLite instance.
- **Task:** Enhance Figma hi-fidelity UI mockups with more interactive components.
- **Task:** Develop TestCafe browser flows for form submissions.

### 3. Done
- **Task:** Setup Node.js project architecture (`server/`, `models/`, `controllers/`, `routes/`, `database/`).
- **Task:** Create `database.js` schema initializing 4 core tables: (Chickens, Feed, Eggs, Staff).
- **Task:** Write database initialization script with random 20-item mocked seed entries to reflect a real farm schema.
- **Task:** Build fully operational backend CRUD logic (GET, POST, PUT, DELETE) handling Chickens.
- **Story:** "As a farm manager, I want to track chickens so that I can monitor productivity."
- **Task:** Implement Input validation middleware via `express-validator`.
- **Task:** Handle express 404 endpoints and general unhandled exception errors (`app.js`).
- **Task:** Generate initial Vite client workspace.
- **Task:** Create Dashboard grid and React conditional rendering logic.
- **Task:** Build modern Glassmorphism-style UI styles in `index.css`.
- **Task:** Connect Client UI directly to Express backend API via `fetch()`.
