import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Landing from "../Landing/Landing";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Links = ["Dashboard", "Add Worker", "Upload Attendance", "Attendance"];

// const NavLink = ({ children }) => (
//   // <Link
//   //   px={2}
//   //   py={1}
//   //   rounded={"md"}
//   //   _hover={{
//   //     textDecoration: "none",
//   //     bg: useColorModeValue("gray.200", "gray.700"),
//   //   }}
//   //   href={"#"}
//   // >
//   //   {children}
//   // </Link>
//   <></>
// );

export default function Simple(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  const logout = () => {
    setUser(null);
    delete localStorage["profile"];
    console.log(user);
    window.location.href = "/";
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <Box bg={useColorModeValue("#f0f0ff")} px={4} style={{ color: "#fffff" }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">
              <Box>
                <span className="logo">Construct-W</span>
              </Box>
            </NavLink>
            {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={logout} className="logout">
              Log Out
            </Button>
            <Menu>
              <MenuButton
                padding={10}
                // as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  className="avatar"
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">{user.name}</span>
                    <span className="userShowUserTitle">{user.title}</span>
                  </div>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">Account details</span>

                    <span className="userShowUserTitle">
                      <PermIdentity
                        className="userShowIcon"
                        style={{ paddingTop: "3px" }}
                      />
                      {user.email}
                    </span>
                  </div>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">Contact details</span>

                    <span className="userShowUserTitle">+{user.phone}</span>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
}
