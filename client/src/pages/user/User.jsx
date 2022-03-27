import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import { useState, React } from 'react'
import FileBase from 'react-file-base64';
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};

export default function User() {
  const [form, setForm] = useState(initialState);
  let data = JSON.parse(localStorage.getItem("profile"));
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({...form,contractor_id:"1"});
    console.log(form);
        axios
          .post("http://127.0.0.1:8000/api/worker",form)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => console.log(err));
      };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onFileChange = (e) => { 
    setForm({ ...form,[e.target.name]: e.target.files[0] }); 
    console.log(form)
  }; 

return (
  <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Add Worker</h1>
      
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img
            src="https://picsum.photos/id/1/200/300"
            alt="profile pic"
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername">{data.name}</span>
            <span className="userShowUserTitle">Contractor</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">{data.email}</span>
          </div>

          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">{data.phone}</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">{data.email}</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">{data.address}</span>
          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Add Worker</span>
        <form className="userUpdateForm" onSubmit={handleSubmit}>
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="userUpdateInput"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter email id"
                className="userUpdateInput"
                name="email"
                onChange={handleChange}
              />
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="userUpdateInput"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="Enter phone no."
                className="userUpdateInput"
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter address"
                className="userUpdateInput"
                name="address"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div className="userUpdateRight"> */}
            {/* <div className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src={form.file}
                alt=""
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <FileBase type="file" multiple={false} onDone={({ base64 }) => setForm({...form,file: base64})} />  */}
              {/* <input type="file" onChange={(e) => {
                console.log(
                  e.target.files[0]     
                 );}}
                /> */}
            {/* </div> */}
            <button className="userUpdateButton" type="submit">Create</button>
          {/* </div> */}
        </form>
      </div>
    </div>
  </div>
);
}
