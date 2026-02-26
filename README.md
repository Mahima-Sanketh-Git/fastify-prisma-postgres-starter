# Fastify Prisma PostgreSQL Starter

## Project Overview
This repository is a starter template for building a RESTful API application using Fastify, Prisma, and PostgreSQL. It provides a robust structure for developers looking to kick-start their projects with modern tools and practices.

## Features
- Fast and efficient web server with Fastify.
- Object-relational mapping with Prisma.
- PostgreSQL integration.
- Sample API endpoints to demonstrate usage.
- Environment configuration management.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mahima-Sanketh-Git/fastify-prisma-postgres-starter.git
   cd fastify-prisma-postgres-starter
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your PostgreSQL connection string:
   ```plaintext
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DATABASE
   ```
4. **Migrate the database**:
   ```bash
   npx prisma migrate dev --name init
   ```
5. **Start the application**:
   ```bash
   npm start
   ```

## Development Guide
To start a development server with auto-reload:
```bash
npm run dev
```

### Running Tests
To run tests, use:
```bash
npm test
```

## Project Structure
```
fastify-prisma-postgres-starter/
├── src/
│   ├── controllers/      # API controllers
│   ├── database/         # Database models and configuration
│   ├── routes/           # API routes
│   ├── middlewares/      # Middleware for request handling
│   └── server.js         # Entry point for the application
├── .env                  # Environment variables
├── package.json          # App dependencies and scripts
└── prisma/              # Prisma configuration and migrations
```

## API Documentation
- **GET /api/users**: Retrieve all users.
- **POST /api/users**: Create a new user.
  - **Body**: `{ name: string, email: string }`

## Contributing Guidelines
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Create a Pull Request.

## License
This project is licensed under the MIT License.

## Troubleshooting
- If you run into issues, ensure that your `DATABASE_URL` is correct and PostgreSQL is running.
- Check the console for any errors during startup or API calls.
