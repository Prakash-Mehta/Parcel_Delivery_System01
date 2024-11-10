const express = require("express");
const router = express.Router();
const Parcel = require("../models/Parcel");

// added  below 2 line
// const { updateParcelStatus } = require('../controllers/parcelController');

// // Assuming the parcel ID is passed as a URL parameter
// router.put('/update/:id', updateParcelStatus);


// ADD PARCEL

router.post("/", async (req, res) => {
  const newParcel = Parcel(req.body);
  try {
    const parcel = await newParcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL PARCELS

router.get("/", async (req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE PARCEL

router.put("/:id", async (req, res) => {
  try {
    const parcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ONE PARCEL

router.get("/find/:id", async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USERS PARCEL

router.post("/me", async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE SHIFT

router.delete("/:id", async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Parcel has been deleted!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;















// const express = require("express");
// const router = express.Router();
// const Parcel = require("../models/Parcel");

// // ADD PARCEL

// // ADD PARCEL
// // router.post("/", async (req, res) => {
// //   console.log("Parcel data received:", req.body);  // Log data for debugging
// //   const newParcel = Parcel(req.body);
// //   try {
// //     const parcel = await newParcel.save();
// //     res.status(201).json(parcel);
// //   } catch (error) {
// //     res.status(500).json(error);
// //   }
// // });


// router.post("/", async (req, res) => {
//   const newParcel = Parcel(req.body);
//   try {
//     const parcel = await newParcel.save();
//     res.status(201).json(parcel);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //GET ALL PARCELS

// router.get("/", async (req, res) => {
//   try {
//     const parcels = await Parcel.find().sort({ createdAt: -1 });
//     res.status(200).json(parcels);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // UPDATE PARCEL
// // UPDATE PARCEL
// // router.put("/:id", async (req, res) => {
// //   try {
// //     console.log("Updating parcel with ID:", req.params.id, "and data:", req.body);
// //     const updatedParcel = await Parcel.findByIdAndUpdate(
// //       req.params.id,
// //       { $set: req.body },
// //       { new: true }
// //     );

// //     if (!updatedParcel) {
// //       console.log("Parcel not found for ID:", req.params.id);
// //       return res.status(404).json({ message: "Parcel not found" });
// //     }

// //     console.log("Updated parcel:", updatedParcel); // <-- Log updated parcel
// //     res.status(200).json(updatedParcel); // Use 200 for successful updates
// //   } catch (error) {
// //     console.error("Error updating parcel:", error); // Log the error for debugging
// //     res.status(500).json(error);
// //   }
// // });


// router.put("/:id", async (req, res) => {
//   try {
//     const parcel = await Parcel.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(201).json(parcel);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // GET ONE PARCEL

// router.get("/find/:id", async (req, res) => {
//   try {
//     const parcel = await Parcel.findById(req.params.id);
//     res.status(200).json(parcel);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // GET USERS PARCEL

// router.post("/me", async (req, res) => {
//   try {
//     const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
//       createdAt: -1,
//     });
//     res.status(200).json(parcels);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // DELETE SHIFT

// router.delete("/:id", async (req, res) => {
//   try {
//     await Parcel.findByIdAndDelete(req.params.id);

//     res.status(200).json({ message: "Parcel has been deleted!" });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// module.exports = router;
