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

export default function ProjectDetails({ startDate, endDate, employees }) {
  return (
    <>
      <Flex>
        <div className="card">
          <Stack>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Project Details
            </Heading>
            <Text color={"gray.500"}>Start Date: {startDate}</Text>
            <Text color={"gray.500"}>End Date: {endDate}</Text>
            <Text color={"gray.500"}>Number of employees: {employees}</Text>
          </Stack>
        </div>
      </Flex>
    </>
  );
}
