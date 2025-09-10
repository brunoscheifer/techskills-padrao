import { configDotenv } from "dotenv";
configDotenv({
    path: process.env.NODE_ENV != "" && process.env.NODE_ENV != undefined ? `.env.${process.env.NODE_ENV}` : '.env' 
})

export const config = {
    app_name: process.env.APP_NAME || 'deu erro',
    app_port: process.env.APP_PORT || 3000
}