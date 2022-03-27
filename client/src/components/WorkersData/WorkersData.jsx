import "./WorkersData.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { Flex } from "@chakra-ui/react";
import CardWorker from "../Cards/CardWorker"
import axios from "axios";

export default function WorkersData({}) {
  const [data, setData] = useState([{"id":1,"name":"Nihal","email":"nihal@gmail.com","password":"pbkdf2_sha256$260000$GHsAdoYVYMss983JX3uzJZ$CPXevVk996RRQqTfU0kYO8RIQ43tmqPYfiL0cdTZelM=","lastname":null,"img":null,"phone":"8291638536","address":"Borivali","title":"Contractor","Present":40,"Violations":5,"Absent":10},{"id":31,"name":"Lance Correia","email":"abcd162aaa003@gmail.com","password":"deadpool","lastname":null,"img":null,"phone":"08291638536","address":"kanderpada","title":"Worker","Present":0,"Violations":0,"Absent":0},{"id":32,"name":"Lance Correia","email":"abcd162aaa00dd3@gmail.com","password":"deadpool","lastname":null,"img":null,"phone":"08291638536","address":"kanderpada","title":"Worker","Present":0,"Violations":0,"Absent":0},{"id":33,"name":"Lance Correia","email":"abcd162aaaa00dd3@gmail.com","password":"deadpool","lastname":null,"img":null,"phone":"08291638536","address":"kanderpada","title":"Worker","Present":0,"Violations":0,"Absent":0}]);
  const [attendance,setAttendance] = useState(false)

  useEffect(() => {
    const getData = async () => {
      axios
        .post("http://127.0.0.1:8000/api/workers", {
          jwt: JSON.parse(localStorage.getItem("profile")).jwt,
        })
        .then((response) => {
          console.log(response.data);
          // setData([{"id":1,"name":"Nihal","email":"nihal@gmail.com","password":"pbkdf2_sha256$260000$GHsAdoYVYMss983JX3uzJZ$CPXevVk996RRQqTfU0kYO8RIQ43tmqPYfiL0cdTZelM=","lastname":null,"img":null,"phone":"8291638536","address":"Borivali","title":"Contractor","Present":40,"Violations":5,"Absent":10},{"id":31,"name":"Lance Correia","email":"abcd162aaa003@gmail.com","password":"deadpool","lastname":null,"img":null,"phone":"08291638536","address":"kanderpada","title":"Worker","Present":0,"Violations":0,"Absent":0},{"id":32,"name":"Lance Correia","email":"abcd162aaa00dd3@gmail.com","password":"deadpool","lastname":null,"img":null,"phone":"08291638536","address":"kanderpada","title":"Worker","Present":0,"Violations":0,"Absent":0},{"id":33,"name":"Lance Correia","email":"abcd162aaaa00dd3@gmail.com","password":"deadpool","lastname":null,"img":null,"phone":"08291638536","address":"kanderpada","title":"Worker","Present":0,"Violations":0,"Absent":0}]);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleChange=(id)=>{
    setAttendance(!attendance);
  }

  // const columns = [
  //   // { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "user",
  //     headerName: "User",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="userListUser">
  //           <img className="userListImg" src={params.row.avatar} alt="" />
  //           {params.row.username}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "email", headerName: "Email", width: 200 },
          
    
  //   {
  //     field: "Attendance",
  //     headerName: "Attendance",
  //     width: 160,
  //   }
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
  // ];

  return (
    <>
     <div className="userList" style={{padding:"10px"}}>
         
         <Flex>
         {data.map((item) => (
         <CardWorker
          name={item.name}
          position={item.position}
          pastProjects={item.pastProjects}
          violations={item.violations}
          image = "https://picsum.photos/92/92?rand"
        />))}
         </Flex>
    </div>
      
    </>
   
  );
}
