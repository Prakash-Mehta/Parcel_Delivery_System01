// const ejs = require("ejs");
// const dotenv = require("dotenv");
// const sendMail = require("../helpers/sendMail");
// const Parcel = require("../models/Parcel");
// dotenv.config();

// const SendParcelPendingEmail = async () => {
//   const parcels = await Parcel.find({ status: 0 });
//   if (parcels.length > 0) {
//     for (let parcel of parcels) {
//       try {
//         const emailData = await ejs.renderFile("templates/pendingparcel.ejs", {
//           sendername: parcel.sendername,
//           from: parcel.from,
//           to: parcel.to,
//           recipientname: parcel.recipientname,
//           cost: parcel.cost,
//           weight: parcel.weight,
//           note: parcel.note,
//         });

//         // Send email to sender
//         const senderMessageOption = {
//           from: process.env.EMAIL,
//           to: parcel.senderemail,
//           subject: "You've got a parcel",
//           html: emailData,
//         };
//         await sendMail(senderMessageOption);

//         // Send email to recipient
//         const recipientMessageOption = {
//           from: process.env.EMAIL,
//           to: parcel.recipientemail,
//           subject: "You've got a parcel",
//           html: emailData,
//         };
//         await sendMail(recipientMessageOption);

//         // Update the parcel status to pending (1)
//         await Parcel.findByIdAndUpdate(parcel._id, { status: 1 });

//       } catch (error) {
//         console.error("Error processing parcel:", error);
//       }
//     }
//   } else {
//     console.log("No parcels found with status 0 (pending).");
//   }
// };

// module.exports = { SendParcelPendingEmail };



// ADDED NEWEST

const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Parcel = require("../models/Parcel");
dotenv.config();

const SendParcelPendingEmail = async () => {
  const parcels = await Parcel.find({status: 0 });
  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/pendingparcel.ejs",
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
            subject: "You've got a parcel",
            html: data,
          };

          try {
            await sendMail(messageoption); // Ensure the email is sent before continuing
          } catch (error) {
            console.log(error);
          }
        }
      );

      ejs.renderFile(
        "templates/pendingparcel.ejs",
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
            subject: "You've got a parcel",
            html: data,
          };

          try {
            await sendMail(messageoption);
            await Parcel.findByIdAndUpdate(parcel._id, { status: 1 }); // Ensure status update happens after email is sent
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }
};

module.exports = { SendParcelPendingEmail };



// const ejs = require("ejs");
// const dotenv = require("dotenv");
// const sendMail = require("../helpers/sendMail");
// const Parcel = require("../models/Parcel");
// dotenv.config();

// const SendParcelPendingEmail = async () => {
//   const parcels = await Parcel.find({status: 0 });
//   if (parcels.length > 0) {
//     for (let parcel of parcels) {
//       ejs.renderFile(
//         "templates/pendingparcel.ejs",
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
//             subject: "You've got a parcel",
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
//         "templates/pendingparcel.ejs",
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
//             subject: "You've got a parcel",
//             html: data,
//           };

//           try {
//             sendMail(messageoption);
//             await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 1 } });
//           } catch (error) {
//             console.log(err);
//           }
//         }
//       );
//     }
//   }
// };

// module.exports = { SendParcelPendingEmail };




// const ejs = require("ejs");
// const dotenv = require("dotenv");
// const sendMail = require("../helpers/sendMail");
// const Parcel = require("../models/Parcel");
// dotenv.config();

// const SendParcelPendingEmail = async () => {
//   const parcels = await Parcel.find({status: 0 });
//   if (parcels.length > 0) {
//     for (let parcel of parcels) {
//       ejs.renderFile(
//         "templates/pendingparcel.ejs",
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
//             subject: "You've got a parcel",
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
//         "templates/pendingparcel.ejs",
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
//             subject: "You've got a parcel",
//             html: data,
//           };

//           try {
//             sendMail(messageoption);
//             await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 1 } });
//           } catch (error) {
//             console.log(err);
//           }
//         }
//       );
//     }
//   }
// };

// module.exports = { SendParcelPendingEmail };
