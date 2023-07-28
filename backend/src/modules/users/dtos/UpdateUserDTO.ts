import { User } from "@prisma/client"

export interface IUpdateUserDTO {
    id: string
    name: string
    email: string
    password: string
}