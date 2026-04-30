import express from 'express';
import {CreateUserSchema} from '@repo/common/types'
import { prisma } from '@repo/db3/client'

const app = express();
app.use(express.json());

app.listen(3001);