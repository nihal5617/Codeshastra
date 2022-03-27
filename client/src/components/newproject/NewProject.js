import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import "./NewProject.css";

const NewProject = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className="pageflex">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              New Project
            </Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text> */}
          </Stack>
          <form onSubmit={handleSubmit}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="pname" isRequired>
                      <FormLabel>Project Name</FormLabel>
                      <Input type="text" name="pname" onChange={handleChange} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="cname">
                      <FormLabel>Contractor</FormLabel>
                      <Input type="text" name="cname" onChange={handleChange} />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="sdate" isRequired>
                  <FormLabel>Start Date</FormLabel>
                  <Input type="date" name="sdate" onChange={handleChange} />
                </FormControl>

                <FormControl id="ldate" isRequired>
                  <FormLabel>Last Date</FormLabel>
                  <Input type="date" name="ldate" onChange={handleChange} />
                </FormControl>
                <FormControl id="cnsame">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="nworker">
                  <FormLabel>No of Worker</FormLabel>
                  <Input type="number" name="nworker" onChange={handleChange} />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    </div>
  );
};

export default NewProject;
