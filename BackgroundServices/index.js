// const express = require("express");
// const cron = require("node-cron");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const { SendParcelDeliveredEmail } = require("./EmailService/DeliveredParcel");
// const { SendParcelPendingEmail } = require("./EmailService/PendingParcel");
// const { sendWelcomeEmail } = require("./EmailService/WelcomeEmail");

// // Load environment variables
// dotenv.config();

// // Connect to the database
// mongoose
//   .connect(process.env.DB)
//   .then(() => {
//     console.log("DB connection is successful");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // Function to run the cron job
// let attempts = 0; // Initialize the attempts counter
// const maxAttempts = 1; // Set the maximum number of attempts to 5

// const run = () => {
//   // Schedule the task to run every minute (adjust as needed)
//   cron.schedule("* * * * *", async () => {
//     if (attempts < maxAttempts) {
//       try {
//         console.log("Checking for parcels..."); // Log the check attempt

//         // Call the email functions (these should include the necessary logic to find parcels)
//         await SendParcelDeliveredEmail();
//         await SendParcelPendingEmail();
//         await sendWelcomeEmail();

//         attempts++; // Increment the attempts counter
//         console.log('Attempt ${attempts} completed.'); // Log the completed attempt
//       } catch (error) {
//         console.error("Error processing parcels:", error);
//       }
//     } else {
//       console.log("Maximum attempts reached, stopping checks.");
//       cron.stop(); // Stop the cron job
//       console.log("Cron job has been stopped."); // Log that the cron job has stopped
//     }
//   });
// };

// // Start the cron job
// run();

// const PORT = process.env.PORT || 8001;

// app.listen(PORT, () => {
//   console.log('Background service is running on port ${PORT}'); // Fixed string interpolation
// });



// ADDED NEWEST


const express = require("express");
const cron = require("node-cron");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { SendParcelDeliveredEmail } = require("./EmailService/DeliveredParcel");
const { SendParcelPendingEmail } = require("./EmailService/PendingParcel");
const { sendWelcomeEmail } = require("./EmailService/WelcomeEmail");

dotenv.config();

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB connection is successfull");
  })
  .catch((e) => {
    console.log(e);
  });

const run = () => {
  cron.schedule("* * * * * *", async() => {
  
    await SendParcelDeliveredEmail();
    await SendParcelPendingEmail();
    await sendWelcomeEmail();
    
  });
};

run();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Backgroundservice is running on port ${PORT}`);
});





// const express = require("express");
// const cron = require("node-cron");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const { SendParcelDeliveredEmail } = require("./EmailService/DeliveredParcel");
// const { SendParcelPendingEmail } = require("./EmailService/PendingParcel");
// const { sendWelcomeEmail } = require("./EmailService/WelcomeEmail");

// dotenv.config();

// mongoose
//   .connect(process.env.DB)
//   .then(() => {
//     console.log("DB connection is successfull");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // Function to run the cron job
// let attempts = 0; // Initialize the attempts counter
// const maxAttempts = 1; // Set the maximum number of attempts to 5

// const run = () => {
//   // Schedule the task to run every minute (adjust as needed)
//   cron.schedule("* * * * *", async () => {
//     if (attempts < maxAttempts) {
//       try {
//         console.log("Checking for parcels..."); // Log the check attempt

//         // Call the email functions (these should include the necessary logic to find parcels)
//         await SendParcelDeliveredEmail();
//         await SendParcelPendingEmail();
//         await sendWelcomeEmail();

//         attempts++; // Increment the attempts counter
//         console.log('Attempt ${attempts} completed.'); // Log the completed attempt
//       } catch (error) {
//         console.error("Error processing parcels:", error);
//       }
//     } else {
//       console.log("Maximum attempts reached, stopping checks.");
//       cron.stop(); // Stop the cron job
//       console.log("Cron job has been stopped."); // Log that the cron job has stopped
//     }
//   });
// };

// run();
// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Backgroundservice is running on port ${PORT}`);
// });