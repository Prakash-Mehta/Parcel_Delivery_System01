// import { Link } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
// import { FaTrash } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethods";

// const Parcels = () => {
//   const [parcels, setParcels] = useState([]);

//   const columns = [
//     { field: "from", headerName: "From", width: 150 },
//     { field: "to", headerName: "To", width: 150 },
//     { field: "sendername", headerName: "Sender", width: 150 },
//     { field: "recipientname", headerName: "Recipient", width: 150 },
//     { field: "note", headerName: "Note", width: 200 },
//     {
//       field: "edit",
//       headerName: "Edit",
//       width: 150,
//       renderCell: (params) => (
//         <Link to={"/parcel/" + params.row._id}>
//           <button className="bg-teal-300 text-white cursor-pointer w-[70px]">
//             Edit
//           </button>
//         </Link>
//       ),
//     },
//     {
//       field: "delete",
//       headerName: "Delete",
//       width: 150,
//       renderCell: (params) => (
//         <FaTrash
//           className="text-red-500 cursor-pointer m-[10px]"
//           onClick={() => handleDelete(params.row._id)}
//         />
//       ),
//     },
//   ];

//   useEffect(() => {
//     const getParcels = async () => {
//       try {
//         const res = await publicRequest.get("/parcels");
        
//         // Debugging: Check the structure of res.data
//         console.log(res.data);

//         // Check if res.data is an array
//         if (Array.isArray(res.data)) {
//           setParcels(res.data);  // Only set the parcels state if it's an array
//         } else {
//           console.error("Error: res.data is not an array", res.data);
//           setParcels([]);  // Fallback to an empty array if not an array
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getParcels();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await publicRequest.delete(`/parcels/${id}`);
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="m-[30px] bg-[#fff] p-[20px]">
//       <div className="flex items-center justify-between">
//         <h1 className="m-[20px] text-[20px]">All Parcels</h1>
//         <Link to="/newparcel">
//           <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">
//             New Parcel
//           </button>
//         </Link>
//       </div>
//       <DataGrid
//         rows={parcels.map((row, index) => ({ ...row, id: row._id || index }))}
//         columns={columns}
//         disableSelectionOnClick
//         pageSize={10}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Parcels;






//ADDED NEWEST


// import { Link } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
// import { FaTrash } from "react-icons/fa";
// import { useEffect } from "react";
// import { useState } from "react";
// import {publicRequest} from "../requestMethods";

// const Parcels = () => {

//   const [parcels, setParcels] = useState([]);

  

//   const columns = [
//     { field: "from", headerName: "From", width: 150 },
//     { field: "to", headerName: "To", width: 150 },
//     { field: "sendername", headerName: "Sender", width: 150 },
//     { field: "recipientname", headerName: "Recipient", width: 150 },
//     { field: "note", headerName: "Note", width: 200 },
//     {
//       field: "edit",
//       headerName: "Edit",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/parcel/" + params.row._id}>
//               <button className="bg-teal-300  text-white cursor-pointer  w-[70px]">
//                 Edit
//               </button>
//             </Link>
//           </>
//         );
//       },
//     },
//     {
//       field: "delete",
//       headerName: "Delete",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <FaTrash className="text-red-500 cursor-pointer m-[10px]" onClick={() => handleDelete(params.row._id)}/>
//           </>
//         );
//       },
//     },
//   ];

//   useEffect(() => {
//     const getParcels = async () => {
//       try {
//         const res = await publicRequest.get("/parcels");
//         setParcels(res.data);
//       } catch (error) {
//         console.log(error)
//       }
//     };
//     getParcels();
//   }, []);


//   const handleDelete = async (id) => {
//     try {
//       await publicRequest.delete(`/parcels/${id}`);
//       setParcels((prevParcels) => prevParcels.filter(parcel => parcel._id !== id)); // Directly update state
//     } catch (error) {
//       console.log(error);
//       // Optionally, you can set an error message in the state to display to the user
//     } }

// // const handleDelete = async(id) =>{
// //   try {
// //       await publicRequest.delete(`/parcels/${id}`);
// //       window.location.reload();
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

//   return (
//     <div className="m-[30px] bg-[#fff] p-[20px]">
//       <div className="flex items-center justify-between">
//         <h1 className="m-[20px] text-[20px]">All Parcels</h1>

//         <Link to="/newparcel">
//           <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">
//             New Parcel
//           </button>
//         </Link>
//       </div>
//       <DataGrid 
//       rows={parcels} 
//       columns={columns} 
//       getRowId={(row) => row._id}
//       disableSelectionOnClick
//       pageSize={10}
//       checkboxSelection
//       />
//     </div>
//   );
// };

// export default Parcels;






















import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Parcels = () => {
  const [parcels, setParcels] = useState([]);

  const columns = [
    { field: "from", headerName: "From", width: 150 },
    { field: "to", headerName: "To", width: 150 },
    { field: "sendername", headerName: "Sender", width: 150 },
    { field: "recipientname", headerName: "Recipient", width: 150 },
    { field: "note", headerName: "Note", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => (
        <Link to={"/parcel/" + params.row._id}>
          <button className="bg-teal-300 text-white cursor-pointer w-[70px]">
            Edit
          </button>
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <FaTrash
          className="text-red-500 cursor-pointer m-[10px]"
          onClick={() => handleDelete(params.row._id)}
        />
      ),
    },
  ];

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.get("/parcels");
        setParcels(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/parcels/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>
        <Link to="/newparcel">
          <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">
            New Parcel
          </button>
        </Link>
      </div>
      <DataGrid
        rows={parcels.map((row, index) => ({ ...row, id: row._id || index }))}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default Parcels;











// import { Link } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
// import { FaTrash } from "react-icons/fa";
// import { useEffect } from "react";
// import { useState } from "react";
// import {publicRequest} from "../requestMethods";

// const Parcels = () => {

//   const [parcels, setParcels] = useState([]);

  

//   const columns = [
//     { field: "from", headerName: "From", width: 150 },
//     { field: "to", headerName: "To", width: 150 },
//     { field: "sendername", headerName: "Sender", width: 150 },
//     { field: "recipientname", headerName: "Recipient", width: 150 },
//     { field: "note", headerName: "Note", width: 200 },
//     {
//       field: "edit",
//       headerName: "Edit",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/parcel/" + params.row._id}>
//               <button className="bg-teal-300  text-white cursor-pointer  w-[70px]">
//                 Edit
//               </button>
//             </Link>
//           </>
//         );
//       },
//     },
//     {
//       field: "delete",
//       headerName: "Delete",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <FaTrash className="text-red-500 cursor-pointer m-[10px]" onClick={() => handleDelete(params.row._id)}/>
//           </>
//         );
//       },
//     },
//   ];

//   useEffect(() => {
//     const getParcels = async () => {
//       try {
//         const res = await publicRequest.get("/parcels");
//         setParcels(res.data);
//       } catch (error) {
//         console.log(error)
//       }
//     };
//     getParcels();
//   }, []);

// const handleDelete = async(id) =>{
//   try {
//       await publicRequest.delete(`/parcels/${id}`);
//       window.location.reload();
//   } catch (error) {
//     console.log(error);
//   }
// }

//   return (
//     <div className="m-[30px] bg-[#fff] p-[20px]">
//       <div className="flex items-center justify-between">
//         <h1 className="m-[20px] text-[20px]">All Parcels</h1>

//         <Link to="/newparcel">
//           <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">
//             New Parcel
//           </button>
//         </Link>
//       </div>
//       <DataGrid 
//       rows={parcels} 
//       columns={columns} 
//       getRowId={(row) => row._id}
//       disableSelectionOnClick
//       pageSize={10}
//       checkboxSelection
//       />
//     </div>
//   );
// };

// export default Parcels;
