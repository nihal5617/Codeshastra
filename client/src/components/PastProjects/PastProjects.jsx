import React from 'react'
import CardProjects from '../Cards/CardProjects'; 
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
  import "./PastProject.css";

function PastProjects() {
  return (
      <>
      <div className="card" style={{padding:"10px"}}>
      <Flex>
      
      <CardProjects 
      name = "Baghubai"
      position  = "Project Owner"
      daysTaken = "90"
      Workers = "50"
      image="https://picsum.photos/id/1/200/300"
      />
       </Flex>
      </div>
     
      
      </>
  )
}

export default PastProjects;