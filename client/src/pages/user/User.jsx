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

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};

export default function User(props) {
  const [form, setForm] = useState(initialState);
  const [file, setfile] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, myfile: file })
    console.log(form)
    // useEffect(() => {
    //   const sendWorkerData = async () => {
    //     axios
    //       .post("http://127.0.0.1:8000/api/day",form)
    //       .then((response) => {
    //         console.log(response.data);
    //         setUser((items) => {
    //           return response.data;
    //         });
    //       })
    //       .catch((err) => console.log(err));
    //   };
    //   sendWorkerData();
    // }, []);
  }
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'myFile':
        const data = new FormData();
        data.append('file', e.target.value);
        console.log(data);
      default:
        setForm({ ...form, [e.target.name]: e.target.value });

    }
  }
  const handleFile = (e) => {

    // setForm({ ...form, [e.target.name]: e.target.files[0] });
    // console.log(form)
    // e.preventDefault();
  }

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={props.image}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{props.name}</span>
              <span className="userShowUserTitle">Contractor</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{props.email}</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{props.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{props.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{props.address}</span>
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
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                  name="email"
                  onChange={handleChange}
                />
                <div className="userUpdateItem">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="******"
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
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Akola | Maharashtra"
                  className="userUpdateInput"
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={file}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" name="file" style={{ display: "none" }} onClick={handleChange} />
              </div>
              <button className="userUpdateButton" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
