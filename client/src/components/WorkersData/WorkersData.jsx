import "./WorkersData.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import CardWorker from "../Cards/CardWorker"

export default function WorkersData() {
  const [data, setData] = useState(userRows);
  const [attendance,setAttendance] = useState(false)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleChange=(id)=>{
    setAttendance(!attendance);
  }

  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
          
    
    {
      field: "Attendance",
      headerName: "Attendance",
      width: 160,
    }
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <>
     <div className="userList">
         <Flex>
         <CardWorker
          name="Lance Correia"
          position="Worker"
          pastProjects="28"
          violations="4"
          image = "https://picsum.photos/92/92?rand"
        />
         </Flex>
    </div>
      
    </>
   
  );
}
