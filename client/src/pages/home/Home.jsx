import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Pchart from "../../components/chart/Pchart";
import Card from "../../components/Cards/Card";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      <Flex>
        <Card
          name="Sahil Shetty"
          position="Contractor"
          pastProjects="17"
          onGoingProjects="2"
        />
        <Card
          name="Lance Correia"
          position="Project Owner"
          pastProjects="28"
          onGoingProjects="4"
        />
      </Flex>

      <Chart
        data={userData}
        title="Workers Attendance"
        grid
        dataKey="Active User"
      />

      <Pchart title="Project Progress" grid datakey="Active User" />
      {/* <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}
