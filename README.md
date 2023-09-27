
# Todo API using Node.js and Express.js

This is a simple Todo API built with Node.js and Express.js, designed to manage tasks efficiently. The API is equipped with various features and utilizes a MongoDB database for data storage.

## Project Structure

The project structure is organized as follows:


├── config/           # Configuration files (contains database.js)
├── controllers/      # Controllers for handling API requests (todo controllers)
├── middleware/       # Middleware for error handling (errorMiddleware)
├── models/           # Data models (Todo.js)
├── routes/           # API routes (todoRoutes)
├── utils/            # Utility functions (swagger.js)
├── app.js             # Main application file
├── app.test.js        # Testing using Jest and Supertest
├── index.js           # Entry point (includes app.js and runs server)
└── .env               # Environment variables (contains MongoDB URI)

## Getting Started

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your MongoDB URI:
   ```
   MONGO_URI=your_mongo_db_uri
   ```

4. Start the application:
   ```
   npm start
   ```

The API should now be accessible at `http://localhost:3000`.

## API Documentation

The API documentation is available through Swagger at `http://localhost:3000/api-docs`.

## Running Tests

To run tests using Jest and Supertest:

```
npx jest 
```

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are highly appreciated.
