import express from "express";
import jwt from 'jsonwebtoken'
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import {error, success} from "../server.js";
import {compare, hash} from 'bcrypt'
const prisma = new PrismaClient()

const router = express.Router();
router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password) {
        return error(res, "Girilen bilgiler geçersiz ya da eksik.", 400)
    }
    try {
        const checkEmail = await prisma.users.findUnique({
            where: {
                email: email,
            },
        })
        if(checkEmail) {
            const isPasswordsMatch = await compare(password, checkEmail.password);
            delete checkEmail.password
            const token = jwt.sign(checkEmail, process.env.NEXTAUTH_SECRET, { expiresIn: "24h" });
            if(isPasswordsMatch) {
                const updateToken = await prisma.users.update({
                    where: {
                        email: email,
                    },
                    data: {
                        token: token,
                    }
                })
                if(updateToken) {
                    return success(res, token, 200)
                } else {
                    return error(res, "Token güncellenemedi.", 404)
                }
            } else {
                return error(res, "Şifre geçersiz.", 404)
            }
        } else {
            return error(res, "Hesap bulunamadı.", 404)
        }
    } catch (e) {
        return error(res, e.toString(), 500)
    }
})

export default router;