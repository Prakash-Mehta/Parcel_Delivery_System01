// import { useLocation } from "react-router-dom";
// import { publicRequest } from "../requestMethods";
// import { useEffect, useState } from "react";

// const Parcel = () => {
//   const location = useLocation();
//   const parcelId = location.pathname.split("/")[2];
//   const [parcel, setParcel] = useState({});
//   const [inputs, setInputs] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   useEffect(() => {
//     const getParcel = async () => {
//       try {
//         const res = await publicRequest.get(`/parcels/find/${parcelId}`);
//         setParcel(res.data);
//         setInputs(res.data); // Set initial inputs to parcel data
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching parcel data");
//         setLoading(false);
//       }
//     };
//     getParcel();
//   }, [parcelId]);

//   const handleUpdate = async () => {
//     try {
//       const updatedInputs = { ...parcel, ...inputs }; // Merge existing and updated data
//       const res = await publicRequest.put(`/parcels/${parcel._id}`, updatedInputs);
//       setParcel(res.data); // Update parcel with response data
//       setInputs(res.data); // Update inputs to reflect changes in UI
//     } catch (error) {
//       setError("Error updating parcel data");
//     }
//   };

//   if (loading) return <div>Loading...</div>; // Loading state
//   if (error) return <div>{error}</div>; // Error state

//   return (
//     <div className="m-[30px] bg-[#fff] p-[20px]">
//       <h2 className="font-semibold">Edit Parcel</h2>
//       <div className="flex">
//         <div className="m-[20px]">
//           <div className="flex flex-col my-[20px]">
//             <label>From</label>
//             <input
//               type="text"
//               placeholder={parcel.from}
//               name="from"
//               value={inputs.from || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label>To</label>
//             <input
//               type="text"
//               placeholder={parcel.to}
//               name="to"
//               value={inputs.to || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           {/* Repeat similar input fields for sendername, recipientname, etc. */}
//         </div>

//         <div className="m-[20px]">
//           <div className="flex flex-col my-[20px]">
//             <label>Date</label>
//             <input
//               type="date"
//               name="date"
//               value={inputs.date || parcel.date?.split("T")[0] || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label>Note</label>
//             <textarea
//               placeholder={parcel.note}
//               name="note"
//               value={inputs.note || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           {parcel.status === 1 && (
//             <button
//               className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[300px]"
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           )}
//         </div>

//         <div className="flex flex-col">
//           <h2 className="font-semibold">Feedback</h2>
//           <span>Goods received in good condition.</span>
//           <span className="text-red-500 text-[18px]">
//             {parcel.status === 1 ? "Pending" : "Delivered"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parcel;














// ADDED NEWEST


import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useEffect } from "react";
import { useState } from "react";

const Parcel = () => {
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
  const [parcel, setParcel] = useState({});
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const getParcel = async () => {
      try {
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        setParcel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcel();
  }, [parcelId]);


  // In your frontend handleUpdateStatus function:
const handleUpdateStatus = async (id) => {
  try {
    await publicRequest.put(`/parcels/update/${id}`, { status: "Delivered" });
    // Update the state to reflect the new status
    setParcels((prevParcels) => 
      prevParcels.map((parcel) =>
        parcel._id === id ? { ...parcel, status: "Delivered" } : parcel
      )
    );
  } catch (error) {
    console.log(error);
  }
};


  // const handleUpdate = async () => {
  //   try {
  //     if (inputs) {
  //       await publicRequest.put(`/parcels/${parcel._id}`, inputs);
  //       window.location.reload();
  //     } else {
  //       await publicRequest.put(`/parcels/${parcel._id}`, {
  //         status: 2,
  //       });
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Edit Parcel</h2>

      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">From</label>
            <input
              type="text"
              placeholder={parcel.from}
              name="from"
              value={inputs.from || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">To</label>
            <input
              type="text"
              placeholder={parcel.to}
              name="to"
              value={inputs.to || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Name</label>
            <input
              type="text"
              placeholder={parcel.sendername}
              name="sendername"
              value={inputs.sendername || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Name</label>
            <input
              type="text"
              placeholder={parcel.recipientname}
              name="recipientname"
              value={inputs.recipientname || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Email</label>
            <input
              type="email"
              placeholder={parcel.senderemail}
              name="senderemail"
              value={inputs.senderemail || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Email</label>
            <input
              type="email"
              placeholder={parcel.recipientemail}
              name="recipientemail"
              value={inputs.recipientemail || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>

        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Weight</label>
            <input
              type="Number"
              placeholder={parcel.weight}
              name="weight"
              value={inputs.weight || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Cost</label>
            <input
              type="Number"
              placeholder={parcel.cost}
              name="cost"
              value={inputs.cost || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input
              type="date"
              placeholder="25/06/2024"
              name="date"
              value={parcel.date || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea
              placeholder={parcel.note}
              type="text"
              name="note"
              value={inputs.note || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>

          {parcel.status === 1 && (
            <button
              className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[300px]"
              onClick={handleUpdate}
            >
              Update
            </button>
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">Feedback</h2>
          <span>Goods received in good condition.</span>
          <span className="text-red-500 text-[18px]">
            {parcel.status === 1 ? "Pending" : "Delivered"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parcel;

















// import { useLocation } from "react-router-dom";
// import { publicRequest } from "../requestMethods";
// import { useEffect, useState } from "react";

// const Parcel = () => {
//   const location = useLocation();
//   const parcelId = location.pathname.split("/")[2];
//   const [parcel, setParcel] = useState({});
//   const [inputs, setInputs] = useState({});

//   const handleChange = (e) => {
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   useEffect(() => {
//     const getParcel = async () => {
//       try {
//         const res = await publicRequest.get(`/parcels/find/${parcelId}`);
//         setParcel(res.data);
//       } catch (error) {
//         console.error("Error fetching parcel data:", error);
//       }
//     };
//     getParcel();
//   }, [parcelId]);

//   const handleUpdate = async () => {
//     console.log("Update button clicked");
//     try {
//       const updatedInputs = inputs || { status: 2 }; // Default to status 2 if no inputs
//       console.log("Parcel ID:", parcel._id);  // Log parcel ID
//       console.log("Updated data:", updatedInputs);  // Log data being sent
      
//       const res = await publicRequest.put(`/parcels/${parcel._id}`, updatedInputs);
//       console.log("Response from update:", res.data); // Log the response data
  
//       // Only update state if the response contains the expected updated parcel
//       if (res.data) {
//         setParcel(res.data); // Update parcel with response data
//       }
//       setInputs({}); // Reset inputs after update
//     } catch (error) {
//       console.error("Error updating parcel:", error);
//     }
//   };
  
  
  
  
  
//   // const handleUpdate = async () => {
//   //   try {
//   //     const updatedInputs = inputs || { status: 2 }; // default status change
//   //     const res = await publicRequest.put(`/parcels/${parcel._id}`, updatedInputs);
//   //     setParcel(res.data); // Update parcel with response data to reflect changes in UI
//   //     setInputs({}); // Reset inputs after update
//   //   } catch (error) {
//   //     console.error("Error updating parcel:", error);
//   //   }
//   // };

//   return (
//     <div className="m-[30px] bg-[#fff] p-[20px]">
//       <h2 className="font-semibold">Edit Parcel</h2>
//       <div className="flex">
//         <div className="m-[20px]">
//           <div className="flex flex-col my-[20px]">
//             <label>From</label>
//             <input
//               type="text"
//               placeholder={parcel.from}
//               name="from"
//               value={inputs.from || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label>To</label>
//             <input
//               type="text"
//               placeholder={parcel.to}
//               name="to"
//               value={inputs.to || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           {/* Repeat similar input fields for sendername, recipientname, etc. */}
//         </div>

//         <div className="m-[20px]">
//           <div className="flex flex-col my-[20px]">
//             <label>Date</label>
//             <input
//               type="date"
//               name="date"
//               value={parcel.date ? parcel.date.split("T")[0] : ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label>Note</label>
//             <textarea
//               placeholder={parcel.note}
//               name="note"
//               value={inputs.note || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           {parcel.status === 1 && (
//             <button
//               className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[300px]"
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           )}
//         </div>

//         <div className="flex flex-col">
//           <h2 className="font-semibold">Feedback</h2>
//           <span>Goods received in good condition.</span>
//           <span className="text-red-500 text-[18px]">
//             {parcel.status === 1 ? "Pending" : "Delivered"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parcel;










// import { useLocation } from "react-router-dom";
// import { publicRequest } from "../requestMethods";
// import { useEffect } from "react";
// import { useState } from "react";

// const Parcel = () => {
//   const location = useLocation();
//   const parcelId = location.pathname.split("/")[2];
//   const [parcel, setParcel] = useState({});
//   const [inputs, setInputs] = useState({});

//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   useEffect(() => {
//     const getParcel = async () => {
//       try {
//         const res = await publicRequest.get("/parcels/find/" + parcelId);
//         setParcel(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getParcel();
//   }, [parcelId]);

//   const handleUpdate = async () => {
//     try {
//       if (inputs) {
//         await publicRequest.put(`/parcels/${parcel._id}`, inputs);
//         window.location.reload();
//       } else {
//         await publicRequest.put(`/parcels/${parcel._id}`, {
//           status: 2,
//         });
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="m-[30px] bg-[#fff] p-[20px]">
//       <h2 className="font-semibold">Edit Parcel</h2>

//       <div className="flex">
//         <div className="m-[20px]">
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">From</label>
//             <input
//               type="text"
//               placeholder={parcel.from}
//               name="from"
//               value={inputs.from || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">To</label>
//             <input
//               type="text"
//               placeholder={parcel.to}
//               name="to"
//               value={inputs.to || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Sender Name</label>
//             <input
//               type="text"
//               placeholder={parcel.sendername}
//               name="sendername"
//               value={inputs.sendername || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Recipient Name</label>
//             <input
//               type="text"
//               placeholder={parcel.recipientname}
//               name="recipientname"
//               value={inputs.recipientname || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Sender Email</label>
//             <input
//               type="email"
//               placeholder={parcel.senderemail}
//               name="senderemail"
//               value={inputs.senderemail || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Recipient Email</label>
//             <input
//               type="email"
//               placeholder={parcel.recipientemail}
//               name="recipientemail"
//               value={inputs.recipientemail || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//         </div>

//         <div className="m-[20px]">
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Weight</label>
//             <input
//               type="Number"
//               placeholder={parcel.weight}
//               name="weight"
//               value={inputs.weight || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Cost</label>
//             <input
//               type="Number"
//               placeholder={parcel.cost}
//               name="cost"
//               value={inputs.cost || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Date</label>
//             <input
//               type="date"
//               placeholder="25/06/2024"
//               name="date"
//               value={parcel.date || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>
//           <div className="flex flex-col my-[20px]">
//             <label htmlFor="">Note</label>
//             <textarea
//               placeholder={parcel.note}
//               type="text"
//               name="note"
//               value={inputs.note || ""}
//               onChange={handleChange}
//               className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
//             />
//           </div>

//           {parcel.status === 1 && (
//             <button
//               className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[300px]"
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           )}
//         </div>
//         <div className="flex flex-col">
//           <h2 className="font-semibold">Feedback</h2>
//           <span>Goods received in good condition.</span>
//           <span className="text-red-500 text-[18px]">
//             {parcel.status === 1 ? "Pending" : "Delivered"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parcel;
