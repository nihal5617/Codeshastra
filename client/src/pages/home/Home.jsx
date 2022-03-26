import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Pchart from "../../components/chart/Pchart";

export default function Home() {
  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      <Chart data={userData} title="Workers Attendance" grid dataKey="Active User"/>

      <Pchart title="Project Progress" grid datakey = "Active User" /> 
      {/* <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}
