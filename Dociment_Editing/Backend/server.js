// import express from 'express';
// import {} from 'dotenv/config';
// import cors from 'cors';
// import loginRouter from './routes/Login.js';
// import connectDB from './config/db.js';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import session from 'express-session';
// import MongoStore from 'connect-mongo';
// import {WebSocketServer} from 'ws';

// const wss=new WebSocketServer({port:process.env.PORT});

// wss.on("connection",(ws=>{
//     console.log("new user connected");
//     connectDB(); 
//     ws.send("this is the massage from webSockets");
// }))

// const app = express();

// const mongoUrl = process.env.mongo_url;

// app.use(cookieParser());
// app.use(session({
//     secret: process.env.SESSION_SECRET || 'secret',
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({ mongoUrl }), 
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production', 
//         sameSite: 'Strict'
//     }
// }));

// app.use(cors({
//   origin: 'http://localhost:5173', 
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true 
// }));

// app.use(express.json());
// app.use(bodyParser.json());

// app.use('/api', loginRouter);

// app.use('/', (req, res) => {
//     res.send("This is the home route");
// });

// const PORT = process.env.PORT || 3200;
// // app.listen(PORT, async () => {
// //     try {
// //         await connectDB(); 
// //         console.log('MongoDB connected');
// //         console.log(`Server is running at ${PORT}`);
// //     } catch (err) {
// //         console.log("Error in connecting to MongoDB:", err);
// //     }
// // });


import express from 'express';
import {} from 'dotenv/config';
import cors from 'cors';
import loginRouter from './routes/Login.js';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { WebSocketServer } from 'ws';
import http from 'http'; // Import http module

const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Attach WebSocket server to the HTTP server
const wss = new WebSocketServer({ server });

// WebSocket connection handling
wss.on("connection", (ws) => {
    console.log("New user connected");
    ws.send("This is a message from WebSockets");

    ws.on("message", (message) => {
        console.log("Received:", message);
        // Echo the message back to the client
        ws.send(`You said: ${message}`);
    });

    ws.on("close", () => {
        console.log("User disconnected");
    });
});
// wss.clientss.forEach(e=>console.log(e));
console.log(wss.clients);

// Middleware and configuration
const mongoUrl = process.env.mongo_url;

app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict'
    }
}));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', loginRouter);

app.use('/', (req, res) => {
    res.send("This is the home route");
});

const PORT = process.env.PORT || 3200;

// Start the server
server.listen(PORT, async () => {
    try {
        await connectDB();
        console.log('MongoDB connected');
        console.log(`Server is running at ${PORT}`);
    } catch (err) {
        console.log("Error in connecting to MongoDB:", err);
    }
});

