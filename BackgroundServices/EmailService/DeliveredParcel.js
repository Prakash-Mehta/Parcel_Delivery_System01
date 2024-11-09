// const ejs = require("ejs");
// const dotenv = require("dotenv");
// const sendMail = require("../helpers/sendMail");
// const Parcel = require("../models/Parcel");
// dotenv.config();

// const SendParcelDeliveredEmail = async () => {
//   const parcels = await Parcel.find({ status: 2 });
  
//   if (parcels.length > 0) {
//     console.log('Found ${parcels.length} parcels with status 2.');
    
//     let emailCount = 0; // Counter for sent emails
//     const maxEmails = 1; // Limit for sending emails in one run
    
//     for (let parcel of parcels) {
//       if (emailCount >= maxEmails) {
//         console.log("Max email limit reached, stopping the process.");
//         break;
//       }

//       try {
//         // Prepare email content...
        
//         // Send email to sender
//         await sendMail(senderMessageOption);
        
//         // Send email to recipient
//         await sendMail(recipientMessageOption);
        
//         // Update the parcel status to Delivered (3)
//         const updatedParcel = await Parcel.findByIdAndUpdate(parcel._id, { status: 3 }, { new: true });
        
//         if (updatedParcel) {
//           emailCount++;
//           console.log('Parcel ${updatedParcel._id} updated to status: ${updatedParcel.status}');
//         } else {
//           console.log('Parcel update failed for ID: ${parcel._id}');
//         }

//       } catch (error) {
//         console.log("Error processing parcel:", error);
//       }
//     }
//   } else {
//     console.log("No parcels found with status 2 (pending).");
//   }
// };


// module.exports = { SendParcelDeliveredEmail };





// ADDED NEWEST

const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Parcel = require("../models/Parcel");
dotenv.config();

const SendParcelDeliveredEmail = async () => {
  const parcels = await Parcel.find({ status: 2 });

  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/deliveredparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
            return;
          }

          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.senderemail,
            subject: "Your parcel has been delivered",
            html: data,
          };

          try {
            await sendMail(messageoption);
          } catch (error) {
            console.log(error);
          }
        }
      );

      ejs.renderFile(
        "templates/deliveredparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
            return;
          }

          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.recipientemail,
            subject: "Your parcel has been delivered",
            html: data,
          };

          try {
            await sendMail(messageoption);
            // Update the parcel status after sending the email
            await Parcel.findByIdAndUpdate(parcel._id, { status: 3 });
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }
};

module.exports = { SendParcelDeliveredEmail };




// const ejs = require("ejs");
// const dotenv = require("dotenv");
// const sendMail = require("../helpers/sendMail");
// const Parcel = require("../models/Parcel");
// dotenv.config();

// const SendParcelDeliveredEmail = async () => {
//   const parcels = await Parcel.find({ status: 2 });

//   if (parcels.length > 0) {
//     for (let parcel of parcels) {
//       ejs.renderFile(
//         "templates/deliveredparcel.ejs",
//         {
//           sendername: parcel.sendername,
//           from: parcel.from,
//           to: parcel.to,
//           recipientname: parcel.recipientname,
//           cost: parcel.cost,
//           weight: parcel.weight,
//           note: parcel.note,
//         },
//         async (err, data) => {
//           let messageoption = {
//             from: process.env.EMAIL,
//             to: parcel.senderemail,
//             subject: "Your parcel has been delivered",
//             html: data,
//           };

//           try {
//             sendMail(messageoption);
           
//           } catch (error) {
//             console.log(err);
//           }
//         }
//       );

//       ejs.renderFile(
//         "templates/deliveredparcel.ejs",
//         {
//           sendername: parcel.sendername,
//           from: parcel.from,
//           to: parcel.to,
//           recipientname: parcel.recipientname,
//           cost: parcel.cost,
//           weight: parcel.weight,
//           note: parcel.note,
//         },
//         async (err, data) => {
//           let messageoption = {
//             from: process.env.EMAIL,
//             to: parcel.recipientemail,
//             subject: "Your parcel has been delivered",
//             html: data,
//           };

//           try {
//             sendMail(messageoption);
//             await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 3} });
//           } catch (error) {
//             console.log(err);
//           }
//         }
//       );
//     }
//   }
// };

// module.exports = {SendParcelDeliveredEmail };




// const ejs = require("ejs");
// const dotenv = require("dotenv");
// const sendMail = require("../helpers/sendMail");
// const Parcel = require("../models/Parcel");
// dotenv.config();

// const SendParcelDeliveredEmail = async () => {
//   const parcels = await Parcel.find({ status: 2 });

//   if (parcels.length > 0) {
//     for (let parcel of parcels) {
//       ejs.renderFile(
//         "templates/deliveredparcel.ejs",
//         {
//           sendername: parcel.sendername,
//           from: parcel.from,
//           to: parcel.to,
//           recipientname: parcel.recipientname,
//           cost: parcel.cost,
//           weight: parcel.weight,
//           note: parcel.note,
//         },
//         async (err, data) => {
//           let messageoption = {
//             from: process.env.EMAIL,
//             to: parcel.senderemail,
//             subject: "Your parcel has been delivered",
//             html: data,
//           };

//           try {
//             sendMail(messageoption);
           
//           } catch (error) {
//             console.log(err);
//           }
//         }
//       );

//       ejs.renderFile(
//         "templates/deliveredparcel.ejs",
//         {
//           sendername: parcel.sendername,
//           from: parcel.from,
//           to: parcel.to,
//           recipientname: parcel.recipientname,
//           cost: parcel.cost,
//           weight: parcel.weight,
//           note: parcel.note,
//         },
//         async (err, data) => {
//           let messageoption = {
//             from: process.env.EMAIL,
//             to: parcel.recipientemail,
//             subject: "Your parcel has been delivered",
//             html: data,
//           };

//           try {
//             sendMail(messageoption);
//             await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 3} });
//           } catch (error) {
//             console.log(err);
//           }
//         }
//       );
//     }
//   }
// };

// module.exports = {SendParcelDeliveredEmail };
