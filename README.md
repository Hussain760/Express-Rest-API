# Express REST API

## Overview

This project implements a CRUD (Create, Read, Update, Delete) operation API using Express.js. It provides endpoints for interacting with data stored in a JSON file. The API is designed to handle HTTP requests and perform corresponding actions on the data.

## Folder Structure

```
.
└── src
    ├── index.ts
    ├── Database
    │   └── Data.json
    └── Router
        ├── route.ts
        └── controller.ts
```

- **src**: Main source code directory.
  - **index.ts**: Entry point file for the application.
  - **Database**: Folder containing data-related files.
    - **Data.json**: JSON file storing fake data.
  - **Router**: Folder containing routing and controller files.
    - **route.ts**: File defining API routes.
    - **controller.ts**: File containing logic for handling requests.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-rest-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd express-rest-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm run dev
   ```
2. Access the API endpoints using tools like Postman or curl.

## Additional NPM Commands

- **npm run dev**: Runs the index.ts file using nodemon for automatic restart on file changes.
- **npm run build**: Builds a `dist` folder in the root directory containing all compiled code from TypeScript.
- **npm run test**: Runs the `index.js` file inside the `dist` folder.

## Endpoints

- **GET /**: Retrieve all resources.
- **GET /:id**: Retrieve a specific resource by ID.
- **POST /**: Create a new resource.
- **PUT /:id**: Update an existing resource.
- **DELETE /:id**: Delete a resource.

## Technologies Used

- Express.js
- TypeScript

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
