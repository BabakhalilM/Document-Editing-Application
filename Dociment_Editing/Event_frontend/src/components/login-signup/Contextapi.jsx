import { createContext, useEffect, useState } from 'react';
import axios from './api';
import { useToast } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const toast = useToast();
  const [role,setRole]=useState("");
  // const [events, setEvents] = useState([]);
  // const [searchQuery, setSearchQuery] = useState(''); 
  const navigate=useNavigate()



  return (
    <AuthContext.Provider value={{user, setUser,setRole ,role }}>
      {children}
    </AuthContext.Provider>
  );
};
