import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Parcels = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // New loading state
  const [error, setError] = useState(null); // New error state
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getParcels = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset any previous error
      try {
        const res = await publicRequest.post("/parcels/me", {
          email: user.currentUser.email,
        });

        if (Array.isArray(res.data)) {
          setData(res.data); // Only set data if it's an array
        } else {
          setError("Error: Invalid response format.");
        }
      } catch (error) {
        setError("Failed to fetch parcels. Please try again later.");
        console.log(error); // Keep logging for debugging purposes
      } finally {
        setLoading(false); // End loading
      }
    };

    if (user?.currentUser?.email) {
      getParcels();
    }
  }, [user]);

  const columns = [
    { field: "from", headerName: "From", width: 150 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "recipientname", headerName: "Recipient", width: 150 },
    { field: "to", headerName: "To", width: 150 },
    { field: "note", headerName: "Note", width: 300 },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px]">
          <span className="text-[18px]">All Parcels</span>
        </div>

        {loading && <p>Loading parcels...</p>} {/* Loading indicator */}
        {error && <p className="text-red-500">{error}</p>} {/* Error message */}
        
        <div className="p-3">
          {data.length > 0 ? (
            <DataGrid
              rows={data.map((row, index) => ({ ...row, id: row._id || index }))}
              columns={columns}
              getRowId={(row) => row.id} // Ensure to use the correct unique 'id'
              disableSelectionOnClick
              pageSize={10}
              checkboxSelection
            />
          ) : (
            !loading && <p>No parcels found.</p> // Display when there are no parcels
          )}
        </div>
      </div>
    </div>
  );
};

export default Parcels;











// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethods";


// const Parcels = () => {
//   const [data, setData] = useState([]);
//   const user = useSelector((state) => state.user);
  

//   useEffect(() => {
//     const getParcels = async () => {
//       try {
//         const res = await publicRequest.post("/parcels/me", {
//           email: user.currentUser.email,
//         });
//         setData(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getParcels();
//   }, []);

//   const columns = [
//     { field: "from", headerName: "From", width: 150 },
//     { field: "date", headerName: "Date", width: 120 },
//     { field: "recipientname", headerName: "Recipient", width: 150 },
//     { field: "to", headerName: "To", width: 150 },
//     { field: "note", headerName: "Note", width: 300 },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
//       <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
//         <Link to="/myparcels">
//           <FaArrowLeft className="text-[18px] m-2 cursor-pointer" />
//         </Link>

//         <div className="flex justify-between p-[10px]">
//           <span className="text-[18px]">All Parcels</span>
//         </div>

//         <div className="p-3">
//           <DataGrid
//             rows={data.map((row, index) => ({ ...row, id: row._id || index }))}
//             columns={columns}
//             getRowId={(row) => row.id} // Ensure to use the correct unique 'id'
//             disableSelectionOnClick
//             pageSize={10}
//             checkboxSelection
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parcels;














// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethods";


// const Parcels = () => {
//   const [data, setData] = useState([]);
//   const user = useSelector((state) => state.user);
  

//   useEffect(() => {
//     const getParcels = async () => {
//       try {
//         const res = await publicRequest.post("/parcels/me", {
//           email: user.currentUser.email,
//         });
//         setData(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getParcels();
//   }, []);

  

//   const columns = [
//     { field: "from", headerName: "From", width: 150 },
//     { field: "date", headerName: "Date", width: 120 },
//     { field: "recipientname", headerName: "Recipient", width: 150 },
//     { field: "to", headerName: "To", width: 150 },
//     { field: "note", headerName: "Note", width: 300 },
//   ];
//   return (
//     <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
//       <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
//         <Link to="/myparcels">
//           <FaArrowLeft className="text-[18px] m-2 cursor-pointer" />
//         </Link>

//         <div className="flex justify-between p-[10px]">
//           <span className="text-[18px]">All Parcels</span>
//           {/* <span className="font-semibold">Alok Mondala</span> */}
//         </div>

//         <div className="p-3">
//           <DataGrid
//             rows={data}
//             columns={columns}
//             getRowId={(row) => row._id}
//             disableSelectionOnClick
//             pageSize={10}
//             checkboxSelection
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parcels;
