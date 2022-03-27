import React from 'react'
import CardWorker from '../../Cards/CardWorker'
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
import "./WorkerProject.css";
function WorkerProject() {
  return (
    <div className='container-projDetails'>
        <Flex>
        <CardWorker
        name = "Pratik Wadke"
        violations= "10"
        attendance = "70"
        position=""
        image ="https://picsum.photos/id/1/200/300"
        pastProjects= "20"
      />
        </Flex>
      
    </div>
  )
}

export default WorkerProject;
