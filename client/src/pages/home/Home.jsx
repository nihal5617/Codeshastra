import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Pchart from "../../components/chart/Pchart";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Cards/Card";
import { Flex,HStack } from "@chakra-ui/react";
import ProjectDetails from "../../components/Projectdetails/ProjectDetails";

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
      <Flex>
      <HStack spacing="24px">
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
        <ProjectDetails startDate="1-02-2022" endDate="1-5-2022" employees="20"  />
        </HStack>
      </Flex>
      
      <Chart data={userData} title="Workers Attendance" grid dataKey="worker"/>
      

      <Pchart title="Project Progress" grid datakey="Active User" />
      {/* <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}
