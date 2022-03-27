import React from "react";
import "./Details.css";
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

function Details() {
  const name = "Pratik Wadke";
  const violations = "10";
  const attendance = "50";
  const email = "pratikwadke02@gmail.com";
  return (
    <div className="container">
      <Flex>
        <div className="card">
          <Heading>{name}</Heading>
          <br />
          <Text>
            Email: {email}
            <br />
            Attendance: {attendance}
            <br />
            Violations: {violations}
            <br />
          </Text>
        </div>
        <div className="imag">
            <img src="https://picsum.photos/92/92?random=1" alt="Worker Imag" />
        </div>
      </Flex>
    </div>
  );
}

export default Details;
