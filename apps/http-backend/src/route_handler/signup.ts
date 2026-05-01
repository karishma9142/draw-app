import { Request, Response } from "express";
import { CreateUserSchema } from "@repo/common/types";
import { prisma } from "@repo/db3/clients";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const Signup = async (req: Request, res: Response) => {
    try {
        const data = CreateUserSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                msg: "Invalid inputs"
            });
        }

        const user = await prisma.user.findFirst({
            
            where: { email: data.data.email }
        });

        if (user) {
            return res.status(409).json({
                msg: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(data.data.password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: data.data.email,
                password: hashedPassword,
                name: data.data.name
            }
        });

        const token = jwt.sign({ id: newUser.id }, JWT_SECRET);

        res.status(200).json({
            msg: "User created successfully",
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
};