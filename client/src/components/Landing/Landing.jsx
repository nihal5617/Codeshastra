import React from 'react'
import {
    Box,
    Image,
    Button,
    Container,
    Heading,
    Grid,
    Badge,
    FormControl,
    Input,
} from '@chakra-ui/react';
import brandLogo from '../../assets/brand-logo.svg';
import illustration from '../../assets/illustration.svg';
import imageOne from '../../assets/imageOne.png';
import imageTwo from '../../assets/image2.jpg';
import imageThree from '../../assets/image3.jpg';
import imageFour from '../../assets/image4.jpg';
import rightArrow from '../../assets/right-arrow.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            {/* <Box
        color={{
          sm: 'red',
          md: 'blue',
          lg: 'green',
          xl: 'cyan',
          base: 'black',
        }}
      >
        This is a color box sample
      </Box> */}
            <header>
                <Box
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    ml={6}
                    mr={6}
                >
                    <Box>
                        {/* <Image boxSize="90px" src={imageOne} alt="brand" /> */}
                    </Box>
                    <Box><Link to="/">
                        <Button p={3} colorScheme="gray.600" fontSize="lg" variant="link">
                            Log in
                        </Button></Link>
                    </Box>
                </Box>
            </header>
            <Box>
                <Container maxW="container.xl">
                    <Box
                        d="flex"
                        alignItems="center"
                        py="20"
                        flexDirection={{
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                            base: 'column',
                        }}
                        padding="0"
                    >
                        <Box mr="6">
                            <Heading as="h1" size="2xl">
                                <Box fontWeight="black">
                                    Get Organized at Work! Focus at what important with ConstructW
                                </Box>
                            </Heading>
                            <Box mt="6" fontWeight="medium">
                                Try the new way of managing your new construction projects.
                                Organzize at work space using ConstructW ,View ongoing projects worker violations ,project progress andso much more
                            </Box>
                        </Box>
                        <Box w="100%">
                            <Image w="100%" src={imageOne} alt="illustration" />
                        </Box>
                    </Box>
                </Container>
                {/* three boxes */}
                <Container maxW="container.xl" mt={10}>
                    <Grid
                        templateColumns={{
                            sm: 'repeat(1, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(3, 1fr)',
                            xl: 'repeat(3, 1fr)',
                            base: 'repeat(1, 1fr)',
                        }}
                        gap={6}
                    >
                        <Box>
                            <Image
                                w="100%"
                                height="210px"
                                borderRadius="lg"
                                src={imageTwo}
                                alt="image three"
                                maxHeight="300px"
                            />
                            <Button colorScheme="teal" variant="link" mt="5">
                                Make new Contracts
                                <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
                            </Button>
                        </Box>
                        <Box>
                            <Image
                                w="100%"
                                height="210px"
                                borderRadius="lg"
                                src={imageThree}
                                alt="image three"
                                maxHeight="300px"
                            />
                            <Button colorScheme="teal" variant="link" mt="5">
                                Explore new Projects
                                <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
                            </Button>
                        </Box>
                        <Box>
                            <Image
                                w="100%"
                                borderRadius="lg"
                                src={imageFour}
                                alt="image three"
                                maxHeight="300px"
                            />
                            <Button colorScheme="teal" variant="link" mt="5">
                                Workers work hard
                                <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
                            </Button>
                        </Box>
                    </Grid>
                </Container>
                {/* pills */}
                <Container maxW="container.xl">
                    <Box
                        direction="row"
                        display="flex"
                        flexWrap="wrap"
                        justifyContent={{
                            sm: 'flex-start',
                            md: 'space-between',
                            lg: 'space-between',
                            xl: 'space-between',
                            base: 'flex-start',
                        }}
                        my="10"
                    >
                        <Badge
                            borderRadius="3xl"
                            px={4}
                            py={2}
                            mr="4"
                            mb="4"
                            textTransform="normal"
                            color="#ffffff"
                            bg="blue.100"
                        >
                            Boost your project
                        </Badge>
                        <Badge
                            borderRadius="3xl"
                            px={4}
                            py={2}
                            mr="4"
                            mb="4"
                            color="#ffffff"
                            textTransform="normal"
                            bg="blue.100"
                        >
                            Find your workers
                        </Badge>
                        <Badge
                            borderRadius="3xl"
                            px={4}
                            py={2}
                            mr="4"
                            mb="4"
                            color="#ffffff"
                            textTransform="normal"
                            bg="blue.100"
                        >
                            Keep moving
                        </Badge>
                        <Badge
                            borderRadius="3xl"
                            px={4}
                            py={2}
                            mr="4"
                            mb="4"
                            color="#ffffff"
                            textTransform="normal"
                            bg="blue.100"
                        >
                            Share Ideas
                        </Badge>
                        <Badge
                            borderRadius="3xl"
                            px={4}
                            py={2}
                            mr="4"
                            mb="4"
                            color="#ffffff"
                            textTransform="normal"
                            bg="blue.100"
                        >
                            Meet new contractors
                        </Badge>
                        <Badge
                            borderRadius="3xl"
                            px={4}
                            py={2}
                            mr="4"
                            mb="4"
                            color="#ffffff"
                            textTransform="normal"
                            bg="blue.100"
                        >
                            Work Together
                        </Badge>
                        <Badge
                            borderRadius="3xl"
                            px={4}
                            py={2}
                            mr="4"
                            mb="4"
                            color="#ffffff"
                            textTransform="normal"
                            bg="blue.100"
                        >
                            Stay Happy
                        </Badge>
                    </Box>
                </Container>
                {/* last header section */}
                <Container maxW="container.xl" mt={20} pb={5}>
                    <Grid
                        templateColumns={{
                            sm: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(2, 1fr)',
                            xl: 'repeat(2, 1fr)',
                            base: 'repeat(1, 1fr)',
                        }}
                        gap={6}
                    >
                        <Box>
                            <Heading
                                as="h3"
                                size="lg"
                                mb="7"
                                display={{
                                    sm: 'none',
                                    md: 'block',
                                    lg: 'block',
                                    xl: 'block',
                                    base: 'none',
                                }}
                            >
                                See what’s Our Stack
                            </Heading>
                            <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                                <Badge
                                    borderRadius="3xl"
                                    px={5}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    React
                                </Badge>
                                <Badge
                                    borderRadius="3xl"
                                    px={5}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    Django
                                </Badge>
                                <Badge
                                    borderRadius="3xl"
                                    px={5}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    MySQL
                                </Badge>
                                <Badge
                                    borderRadius="3xl"
                                    px={5}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    material-ui
                                </Badge>
                                <Badge
                                    borderRadius="3xl"
                                    px={5}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    chakra-ui
                                </Badge>
                                <Badge
                                    borderRadius="3xl"
                                    px={5}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    CSS
                                </Badge>
                                <Badge
                                    borderRadius="3xl"
                                    px={5}
                                    py={2}
                                    mr="4"
                                    mb="4"
                                    color="#ffffff"
                                    textTransform="normal"
                                    bg="blue.100"
                                >
                                    Bootstrap
                                </Badge>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
                <Footer />
            </Box>
        </>
    )
}

export default Landing;
