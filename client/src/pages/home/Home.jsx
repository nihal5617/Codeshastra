import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Pchart from "../../components/chart/Pchart";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [userData, setUser] = useState([]);
    useEffect(() => {
    const getItems = async () => {
      axios
        .get("http://127.0.0.1:8000/api/day")
        .then((response) => {
          console.log(response.data);
          setUser((items) => {
            return response.data;
          });
        })
        .catch((err) => console.log(err));
    };
    getItems();
  }, []);
  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      <Chart data={userData} title="Workers Attendance" grid dataKey="worker"/>

      <Pchart title="Project Progress" grid datakey = "Active User" /> 
      {/* <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}
