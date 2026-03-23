# Screencast Walkthrough Script

## Scene 1: Introduction (0:00 - 0:30)

_Camera shows the presenter, briefly explaining the project._
**Presenter:** "Hello, this screencast covers my full-stack Poultry Farm Management System application. The goal of this assignment is to develop an Agile-driven, scalable Node.js/Express API with a SQLite database, along with a reactive Vite + React client dashboard application."

## Scene 2: The API & Postman Demo (0:30 - 2:00)

_Screen sharing: Open VSCode showing the `/api` directory, specifically `database.js` and `app.js` first. Then opening Postman along with the `/apidoc` site._
**Presenter:** "First, let's examine the backend. I utilized standard Node modules, SQLite3 for rapid local deployment without heavy dependencies, and Express. The project follows a modular controller/route architecture as seen here. Before any request hits our database, it must pass through an express-validator middleware for robust defense against malformed data. Let's send a request using Postman to the port 3000 endpoint. As you can see, I am sending a GET request for `/chickens` and we are receiving 20 JSON mock items, proving our `db:init` seed script was successful. We can also test the DELETE endpoint which returns a 200 success message."

## Scene 3: Client App Demo (2:00 - 3:30)

_Screen sharing: Show the running React app on localhost:5173._
**Presenter:** "Over to the client-side, I've developed a modern single-page application using React and a vibrant Glassmorphism aesthetic. Notice the dashboard statistics are dynamically calculated from the SQLite data using `fetch`. When I click “Chickens Inventory”, we get a clean tabular view. Watch as I click 'Delete'; the UI removes the item seamlessly and makes a background REST call. Finally, navigating to the "Add New Record" tab, we can test form submissions and error validations connecting to our API."

## Scene 4: Figma Prototype & Development Methodology (3:30 - 4:30)

_Screen sharing: Bring up the FIGMA_DESIGN.md and KANBAN_BOARD.md summaries._
**Presenter:** "During the planning phase, I used low-fidelity wireframes to mock up our layout, which later evolved into this dark-mode premium high-fidelity prototype using deep slates and glass effects. You can read the specific typography and design constraints in my `FIGMA_DESIGN` file. For agile tracking, I simulated a Kanban workflow. The board helped structure user stories—like farm managers needing to log egg data—into tangible tasks."

## Scene 5: Git Strategy & Testing (4:30 - 5:00)

_Screen sharing: Show VSCode terminal running `npm test` scripts in both `/api` and `/client`._
**Presenter:** "I employed a strict Git feature branching architecture mapping features across `feature/api` and `feature/client` without polluting `main`. And lastly, testing. I've implemented Supertest and Jest logic evaluations hitting all CRUD API operations, and TestCafe fixtures performing end-to-end clicks confirming visual feedback on the DOM. Thanks for watching!"
