import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/login-signup/Loginpage';
import RegisterForm from './components/login-signup/Signup';
import { Box } from '@chakra-ui/react';

import Home from './components/login-signup/Home';
import Navbar from './Navbar';

function App() {
  return (
    <Box>
      <Box position="fixed" width="100%" zIndex="1000" top="0">
        <Navbar />
      </Box>

      <Box mt={{ base: "80px", md: "150px" }} p={4} bg="gray.50"> 
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
