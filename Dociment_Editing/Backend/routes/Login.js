import express from 'express';
import { login,  logout, register } from '../controllers/login.js';
const loginrouter = express.Router();

loginrouter.post('/register', register);
loginrouter.post('/login', login);
loginrouter.post('/logout', logout);
export default loginrouter;

