import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  IconButton,
  Text,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { AuthContext } from './components/login-signup/Contextapi';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();
  const { user, setUser, setRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClick = async () => {
    if (user) {
      
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      setUser(null);
      setRole(null); 
      toast({
        title: 'Logout successful.',
        description: 'You have been successfully logged out.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/'); 
    } else {
      navigate('/login');
    }
    setIsOpen(false); 
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role');
    if (storedUser) setUser(storedUser);
    if (storedRole) setRole(storedRole);
  }, [setUser, setRole]);

  return (
    <Box position="fixed" zIndex="1" bg="blue.500" p={4} w="100%">
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
      >
        <Heading as={Link} to="/" color="white" mb={{ base: 2, md: 0 }}>
          Editing Application
        </Heading>

        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          onClick={handleToggle}
          color="white"
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          position="absolute"
          top={0}
          right={4}
        />

        <HStack
          spacing={{ base: 4, md: 8 }}
          fontSize={{ base: '16px', md: '14px' }}
          fontWeight="900"
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
        >
          {!user ? (
            <Text as={Link} to='/Signup' color="white" cursor="pointer" onClick={handleToggle}>
              Signup
            </Text>
          ) : null}

          <Text as="button" onClick={handleClick} color="white" cursor="pointer">
            {user ? 'Logout' : 'Login'}
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
