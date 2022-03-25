import { useState, React } from 'react'
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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signuphere } from '../../action/auth';

const initialState = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useNavigate();

    const changesignup = () => {
        setIsSignup(!isSignup);
    }
    const handleSubmit = (e) => {
        if (isSignup) {
            console.log(form);
            dispatch(signuphere(form, history));

          } else {
            dispatch(signin(form, history));
          }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    {isSignup?(<Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>):(<Heading fontSize={'4xl'} textAlign={'center'}>
                        Login
                    </Heading>)}
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <form onSubmit={handleSubmit}>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            {isSignup && (
                                <HStack>
                                    <Box>
                                        <FormControl id="firstName" isRequired>
                                            <FormLabel>First Name</FormLabel>
                                            <Input type="text" name='name' onChange={handleChange} />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="lastName">
                                            <FormLabel>Last Name</FormLabel>
                                            <Input type="text" name='lastName' onChange={handleChange} />
                                        </FormControl>
                                    </Box>
                                </HStack>)}
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" name='email' onChange={handleChange} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} name="password" onChange={handleChange} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            {isSignup && (
                                <FormControl id="confirmPass" isRequired>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <Input type="password" name='confirmPassword' onChange={handleChange} />
                                </FormControl>)}
                            {isSignup ? (
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type='submit'
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Sign up
                                    </Button>
                                </Stack>) : (
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type='submit'
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Login
                                    </Button>
                                </Stack>
                            )}
                            {isSignup ? (
                                <Stack pt={6}>
                                    <Text align={'center'}>
                                        Already a user? <Button bg={'white'} style={{ textDecoration: 'underline' }} p={2} pt={0} onClick={changesignup}>Login</Button>
                                    </Text>
                                </Stack>) : (
                                <Stack pt={6}>
                                    <Text align={'center'}>
                                        Dont have an Acoount? <Button bg={'white'} style={{ textDecoration: 'underline' }} p={2} pt={0} onClick={changesignup}>Signup</Button>
                                    </Text>
                                </Stack>
                            )}
                        </Stack>
                    </Box>
                </form>
            </Stack>
        </Flex>
    )
}

export default Auth
