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
  import axios from "axios";
  import { useState,useEffect } from "react";
  
  export default function CardWorker({name,position, pastProjects, violations,image }) {
    // const [name, setName] = useState([""]);
    // useEffect(() => {
    //   const getName = async () => {
    //     // document.cookie = JSON.parse(localStorage.getItem('profile')).jwt;
    //     axios
    //       .post("http://127.0.0.1:8000/api/contractor", {
    //         jwt: JSON.parse(localStorage.getItem("profile")).jwt,
    //       })
    //       .then((response) => {
    //         console.log(response.data);
    //         setName(() => {
    //           return response.data.name;
    //         });
    //       })
    //       .catch((err) => console.log(err));
    //   };
    //   getName();
    // }, []);
    return (
      <Center py={6}>
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Flex justify={"center"} mt={12}>
            {/* <Avatar
                size={'xl'}
                src={
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              /> */}
          </Flex>
  
          <Box p={6}>
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  image
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {name}
              </Heading>
              <Text color={"gray.500"}>{position}</Text>
            </Stack>
  
            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{pastProjects}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Past Projects
                </Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{violations}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Violations
                </Text>
              </Stack>
            </Stack>
            {/*   
              <Button
                w={'full'}
                mt={8}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}>
                Follow
              </Button> */}
          </Box>
        </Box>
      </Center>
    );
  }
  