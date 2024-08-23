import axios from 'axios';

// Axios setup for HTTP API requests
const api = axios.create({
  baseURL: "http://localhost:2300/api/",
  // baseURL: "https://event-manager-p6m5.onrender.com/api",
  headers: {
    'Content-Type': 'application/json',
  },
});

// WebSocket setup
const ws = new WebSocket('ws://localhost:2300'); // Use ws:// instead of http://

// WebSocket event listeners
ws.onopen = () => {
  console.log("Connected to WebSocket server");
};

ws.onmessage = (event) => {
  console.log("Message from server:", event.data);
};

ws.onclose = () => {
  console.log("Disconnected from WebSocket server");
};

ws.onerror = (error) => {
  console.error("WebSocket error:", error);
};

export default api;
