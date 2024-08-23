import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from './api';
import { FormControl, FormLabel, Box, Button, Input, Text, VStack, useToast } from '@chakra-ui/react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { name, email, password });
      console.log(response);
      toast({
        title: 'Registration successful!',
        description: "You can now log in.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      setName('');
      setEmail('');
      setPassword('');
      
      setTimeout(() => {
        // window.location.href = '/login';
        navigate('/login');
      }, 1000);

    } catch (err) {
      toast({
        title: 'Registration failed.',
        description: "Please try again.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      console.error(err);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10" p="6" boxShadow="md" borderRadius="md" bg="white">
      <Text fontSize="2xl">Register</Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
         
         
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          
          <Button type="submit" colorScheme="teal">Register</Button>
        </VStack>
      </form>
      <br />
      <p>Already have an account? <Text color={"blue"} as={Link} to="/login" size="md">Login</Text></p>
    </Box>
  );
};

export default RegisterForm;
