import express from "express";
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import {error, success} from "../server.js";
import {hash} from 'bcrypt'
const prisma = new PrismaClient()

const router = express.Router();
router.post('/signup', async (req, res) => {
    const community = req.body.community;
    const username = req.body.username;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !username || !password || !community) {
        return error(res, "Girilen bilgiler geçersiz ya da eksik.", 400)
    }
    try {

        const checkEmail = await prisma.users.findUnique({
            where: {
                email: email,
            },
        })
        if(checkEmail) {
            return error(res, "Bu email adresine kayıtlı bir hesap zaten mevcut.", 401)
        }

        const checkUsername = await prisma.users.findUnique({
            where: {
                username: username,
            },
        })

        if(checkUsername) {
            return error(res, "Bu kullanıcı adı ile kayıtlı bir hesap zaten mevcut.", 401)
        }

        const hashedPassword = await hash(password, 10);
        const tryToCreateNewData = await prisma.users.create({
            data: {
                email: email,
                fullname: fullname,
                username: username,
                community: community,
                password: hashedPassword,
                description: 'An empty description.',
                avatar: 'https://images.magnesify.com/logo.png',
                permission: 0,
                university: 'None',
                token: 'None'
            },
        })

        if(tryToCreateNewData) {
            return success(res, "Yeni kullanıcı hesabı başarıyla oluşturuldu.", 201)

        } else {
            return error(res, "Kullanıcı hesabı oluşturulamadı.", 403)

        }

    } catch (e) {
        return error(res, e.toString(), 500)
    }
});

export default router;