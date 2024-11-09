// controllers/parcelController.js
const Parcel = require('../models/Parcel'); // Assuming you have a Parcel model

const updateParcelStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // "Delivered" or other status

    const updatedParcel = await Parcel.findByIdAndUpdate(
      id, 
      { status },
      { new: true }
    );

    if (!updatedParcel) {
      return res.status(404).send('Parcel not found');
    }

    res.status(200).json(updatedParcel);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { updateParcelStatus };
