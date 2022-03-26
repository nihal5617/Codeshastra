// import { Flex, Stack } from "@chakra-ui/react";

import './projectDetails.css';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function ProjectDetails({ startDate, endDate, employees }){
const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      document.cookie = JSON.parse(localStorage.getItem('profile')).jwt;
      axios
        .post("http://127.0.0.1:8000/api/projects", {
          jwt: JSON.parse(localStorage.getItem("profile")).jwt,
        })
        .then((response) => {
          console.log(response.data);
          response.data.Start_date = new Date(response.data.Start_date).toLocaleDateString();
          response.data.End_date = new Date(response.data.End_date).toLocaleDateString();
          setData(response.data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);
  return (
    <>
      <Flex>
        <div className="card">
          <Stack>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Project Details
              <Text color={"gray.500"}>{data.Name}</Text>
            </Heading>
            <Text color={"gray.500"}>Start Date: {data.Start_date}</Text>
            <Text color={"gray.500"}>End Date: {data.End_date}</Text>
            <Text color={"gray.500"}>Number of employees: {data.workers}</Text>
            <Text color={"gray.500"}>Project Description: {data.Description}</Text>
            
          </Stack>
        </div>
      </Flex>
    </>
  );
}
