import { createApp } from "./app.js";
import { createServer } from "node:http";

const server = createServer(createApp());


server.listen(3000,() =>console.log('Server Created'))