import express from 'express'
import { Signup } from './route_handler/signup.js';
import { Signin } from './route_handler/signin.js';
import { Auth } from './middleware.js';
import { Room } from './route_handler/room.js';

const route : express.Router = express.Router();

route.post('/user/signup', Signup);
route.post('/user/Signin' , Signin);
route.post('/room' , Auth , Room);

export default route;