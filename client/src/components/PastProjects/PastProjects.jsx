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
      className = "right"
      name = "Baghubai"
      position  = "Alex"
      daysTaken = "90"
      Workers = "50"
      image="https://picsum.photos/seed/picsum/200/300"
      />
      <CardProjects 
      className = "right"
      name = "DJ sanghavi"
      position  = "leander"
      daysTaken = "90"
      Workers = ""
      image="https://picsum.photos/seed/picsum/200/300"
      />
      <CardProjects 
      className = "right"
      name = "IT department"
      position  = "Dr.Vinaya sawant"
      daysTaken = "90"
      Workers = "10"
      image="https://picsum.photos/seed/picsum/200/300"
      />
      </Flex>
      <Flex>
      <CardProjects 
      className = "right"
      name = "Atharva"
      position  = "Rahul"
      daysTaken = "90"
      Workers = "20"
      image="https://picsum.photos/seed/picsum/200/300"
      />
      <CardProjects 
      className = "right"
      name = "NMIMS"
      position  = "SVKM"
      daysTaken = "90"
      Workers = "400"
      image="https://picsum.photos/seed/picsum/200/300"
      />
      <CardProjects 
      className = "right"
      name = "Mithibai"
      position  = "SVKM"
      daysTaken = "90"
      Workers = "10"
      image="https://picsum.photos/seed/picsum/200/300"
      />
       </Flex>
      </div>
     
      
      </>
  )
}

export default PastProjects;