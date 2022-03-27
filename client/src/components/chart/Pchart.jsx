import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Pchart({ title, data, datakey, grid }) {
  const [left, setProj_Data] = useState(0);
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    const getProj_Data = async () => {
      document.cookie = JSON.parse(localStorage.getItem('profile')).jwt;
      axios
        .post("http://127.0.0.1:8000/api/projects", {
          jwt: JSON.parse(localStorage.getItem("profile")).jwt,
        })
        .then((response) => {
          console.log(response.data);
          response.data.Start_date = new Date(response.data.Start_date);
          response.data.End_date = new Date(response.data.End_date);
          setProj_Data((new Date() -response.data.Start_date)/(1000 * 60 * 60 * 24));
          setCompleted((response.data.End_date- new Date())/(1000 * 60 * 60 * 24));
          console.log(left,completed);
          // console.log(response.data.End_date-response.data.Start_date);
          // a=(response.data.End_date- new Date())/100000;
          // b=(new Date().getTime() -response.data.Start_date)/100000;
          // console.log(a,b)
        })
        .catch((err) => console.log(err));
    };
    getProj_Data();
  }, []);
  return (
    <>
      <div className="chart">
        <div className="chartTitle">{title}</div>
        <div className="pieChart">
          <ResponsiveContainer width="100%">
            <PieChart
            animate
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
              data={[
                { title: "Completed", value: 69, color: "#228b22" },
                { title: "Remaining", value: 31, color: "#ffbf00" },

              ]}
                 labelPosition={1500}
                 startAngle={0}
                 viewBoxSize={[100, 100]}
                  lengthAngle={360}
                    paddingAngle={0}
                       lineWidth={100}
                       reveal={true}
                       label={(data) => data.dataEntry.title}
                       labelStyle={{
                         fontSize: "10px",
                         fontColor: "FFFFFA",
                         fontWeight: "800",
                       }}
               // onMouseOver = {}
            />
            {/* <PieChart
   animate
   animationDuration={500}
   animationEasing="ease-out"
   center={[50, 50]}
   data={[
     {
     color: "#E38627",
     title: "Completed",
     value: 10,
     },
     {
     color: "#C13C37",
     title: "Remaining",
     value: 15,
     },
   ]}
  //  labelPosition={50}
  //  lengthAngle={360}
  //  lineWidth={100}
  //  paddingAngle={0}
   radius={50}
   rounded
   startAngle={0}
   viewBoxSize={[100, 100]}
   label={(data) => data.dataEntry.title}
              labelPosition={65}
              labelStyle={{
                fontSize: "10px",
                fontColor: "FFFFFA",
                fontWeight: "800",
              }} */}
      {/* /> */}
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
