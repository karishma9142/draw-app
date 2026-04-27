import express from 'express';
import {CreateUserSchema} from '@repo/common/types'

const app = express();
app.use(express.json());

app.listen(3000);