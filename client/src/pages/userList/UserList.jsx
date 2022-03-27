import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";


export default function UserList() {
  const [data, setData] = useState([{ "id": 1, "name": "Nihal", "email": "nihal@gmail.com", "password": "pbkdf2_sha256$260000$GHsAdoYVYMss983JX3uzJZ$CPXevVk996RRQqTfU0kYO8RIQ43tmqPYfiL0cdTZelM=", "lastname": null, "img": null, "phone": "8291638536", "address": "Borivali", "title": "Contractor", "Present": 40, "Violations": 5, "Absent": 10 }, { "id": 31, "name": "Lance Correia", "email": "abcd162aaa003@gmail.com", "password": "deadpool", "lastname": null, "img": null, "phone": "08291638536", "address": "kanderpada", "title": "Worker", "Present": 0, "Violations": 0, "Absent": 0 }, { "id": 32, "name": "Lance Correia", "email": "abcd162aaa00dd3@gmail.com", "password": "deadpool", "lastname": null, "img": null, "phone": "08291638536", "address": "kanderpada", "title": "Worker", "Present": 0, "Violations": 0, "Absent": 0 }, { "id": 33, "name": "Lance Correia", "email": "abcd162aaaa00dd3@gmail.com", "password": "deadpool", "lastname": null, "img": null, "phone": "08291638536", "address": "kanderpada", "title": "Worker", "Present": 0, "Violations": 0, "Absent": 0 }]);
  const [attendance, setAttendance] = useState(false)
  const [attendanceofworker, setAttendanceofworker] = useState([])

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

  const handleChange = (id) => {
    setAttendance(!attendance);
  }
  const handleSubmit=()=>{
    console.log(attendanceofworker);
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
            <img className="userListImg" src="https://picsum.photos/92/92?rand" alt={params.row.username} />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },


    {
      field: "Attendance",
      headerName: "Attendance",
      width: 160,
    }

  ];

  return (
    <>
      <div className="userList">
        <DataGrid rows={data} columns={columns} pageSize={8}
        hideFooterPagination
          checkboxSelection onSelectionChange={(newSelection) => {
            setAttendanceofworker(newSelection.rows);
          }} />
          {attendanceofworker.map(val =><h1>{val.id}</h1>)}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}>
          <Button onSubmit={handleSubmit}>Submit</Button>
        </div>
      </div>


    </>

  );
}
