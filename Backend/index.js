const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const parcelRoute = require("./routes/parcels");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Root route to handle GET requests to "/"
app.get("/", (req, res) => {
  res.send("Welcome to the Parcel Delivery API"); // Response for root URL
});


// ROUTES

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/parcels", parcelRoute);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((e) => {
    console.log("DB connection error:", e);
  });

// mongoose
//   .connect(process.env.DB)
//   .then(() => {
//     console.log("DB connection is successfull");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
