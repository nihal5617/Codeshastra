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
      <div className="card">
      <Flex>
      
      <CardProjects 
      name = "Baghubai"
      position  = "Project Owner"
      daysTaken = "90"
      Workers = "50"

      />
       </Flex>
      </div>
     
      
      </>
  )
}

export default PastProjects;