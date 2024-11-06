const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const parcelRouter = require("./routes/parcels");

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS with specific domain for production (adjust for local as needed)
app.use(cors({
  origin: 'https://parcel-delivery-system01frontend.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse JSON bodies
app.use(express.json());

// Root route for testing server status
app.get("/", (req, res) => {
  res.send("Welcome to the Parcel Delivery API");
});

// Health check route (optional)
app.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});

// Use routes for API endpoints
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/parcels", parcelRouter);

// MongoDB connection
const connectDB = () => {
  mongoose
    .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB connection is successful");
    })
    .catch((e) => {
      console.log("DB connection error:", e);
    });
};

// Connect to DB
connectDB();

// Serverless function, so no need for app.listen() on Vercel
// If deploying locally, you can uncomment the app.listen() code.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});











// const express = require("express");
// const mongoose = require("mongoose");  // Import mongoose for MongoDB connection
// const dotenv = require("dotenv");  // Import dotenv to load .env file variables
// const cors = require("cors");  // Import CORS to handle cross-origin requests
// const authRouter = require("./routes/auth");  // Import auth routes
// const userRouter = require("./routes/user");  // Import user routes
// const parcelRouter = require("./routes/parcels");  // Import parcel routes

// // Load environment variables from the .env file
// dotenv.config();

// const app = express();

// // Middleware to enable CORS (Cross-Origin Resource Sharing) and parse JSON bodies
// app.use(cors());
// app.use(express.json());

// // Root route to handle GET requests to "/"
// app.get("/", (req, res) => {
//   res.send("Welcome to the Parcel Delivery API");
// });

// // Use the routes for different API endpoints
// app.use("/api/v1/auth", authRouter);  // Handle authentication-related routes
// app.use("/api/v1/user", userRouter);  // Handle user-related routes
// app.use("/api/v1/parcels", parcelRouter);  // Handle parcel-related routes

// // MongoDB connection logic - directly here in index.js
// const connectDB = () => {
//   mongoose
//     .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("DB connection is successful");
//     })
//     .catch((e) => {
//       console.log("DB connection error:", e);
//     });
// };

// // Call the function to connect to the database
// connectDB();

// // The app.listen() part is not needed when deploying to Vercel because Vercel uses serverless functions,
// // but if you're running it locally, you can use it.
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
//  });






















// const express = require("express");
// const mongoose = require("mongoose");  // Import mongoose for MongoDB connection
// const dotenv = require("dotenv");  // Import dotenv to load .env file variables
// const cors = require("cors");  // Import CORS to handle cross-origin requests
// const authRoute = require("./routes/auth");  // Import auth routes
// const userRoute = require("./routes/user");  // Import user routes
// const parcelRoute = require("./routes/parcels");  // Import parcel routes

// // Load environment variables from the .env file
// dotenv.config();

// const app = express();

// // Middleware to enable CORS (Cross-Origin Resource Sharing) and parse JSON bodies
// app.use(cors());
// app.use(express.json());

// // Root route to handle GET requests to "/"
// app.get("/", (req, res) => {
//   res.send("Welcome to the Parcel Delivery API");
// });

// // Use the routes for different API endpoints
// app.use("/api/v1/auth", authRoute);  // Handle authentication-related routes
// app.use("/api/v1/users", userRoute);  // Handle user-related routes
// app.use("/api/v1/parcels", parcelRoute);  // Handle parcel-related routes

// // MongoDB connection logic - directly here in index.js
// const connectDB = () => {
//   mongoose
//     .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("DB connection is successful");
//     })
//     .catch((e) => {
//       console.log("DB connection error:", e);
//     });
// };

// // Call the function to connect to the database
// connectDB();

// // The app.listen() part is not needed when deploying to Vercel because Vercel uses serverless functions,
// // but if you're running it locally, you can use it.
// // const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
//  });


