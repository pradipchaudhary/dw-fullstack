# Express.js API with MongoDB

This repository demonstrates a basic setup of an Express.js application integrated with MongoDB, showcasing RESTful routes, middleware, and static file handling.

## Features

-   RESTful API routes for managing products, users, reviews, files, and events
-   Middleware for error handling
-   Static file serving from the `/public` folder
-   Connection to MongoDB database
-   CORS-enabled for cross-origin requests

## Technologies Used

-   **Node.js**: Backend JavaScript runtime
-   **Express.js**: Web framework for Node.js
-   **MongoDB**: NoSQL database for data storage
-   **CORS**: Middleware for cross-origin resource sharing
-   **Express Middleware**: JSON parsing and static file serving
-   **Custom Middleware**: Error handling

## Project Structure

```
project-root/
│
├── src/
│   ├── connectTodb/
│   │   └── connectToDb.js         # MongoDB connection setup
│   ├── middleware/
│   │   └── errorMiddleware.js     # Custom error handling middleware
│   ├── route/
│   │   ├── productRoute.js        # Routes for products
│   │   ├── userRoute.js           # Routes for user management
│   │   ├── reviewRoute.js         # Routes for product reviews
│   │   ├── fileRouter.js          # Routes for file handling
│   │   ├── webUserRoute.js        # Routes for website users
│   │   └── eventRoute.js          # Routes for events
│
├── public/                        # Static file serving folder
│
├── constant.js                    # Constants such as the port number
└── server.js                      # Main server setup and configuration
```

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/pradipchaudhary/dw-fullstack.git
    cd dw-fullstack/node/express2
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB connection in `connectToDb.js` and update the connection string.

4. Create a `.env` file in the root directory for any environment variables (optional).

5. Start the server:

    ```bash
    npm start
    ```

6. Visit `http://localhost:<port>` to see the application running.

## API Endpoints

-   **GET** `/`: Home page route
-   **Product Routes**: `/products`
-   **User Routes**: `/users`
-   **Review Routes**: `/reviews`
-   **File Routes**: `/files`
-   **Web User Routes**: `/web-users`
-   **Event Routes**: `/events`

## Middleware

-   **CORS**: Enabled for cross-origin resource sharing
-   **Error Handling Middleware**: Custom middleware for handling errors gracefully

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Made by [Pradip Chaudhary](https://github.com/pradipchaudhary)

```

You can add this `README.md` file to your repository to give a clear overview of your project!
```
