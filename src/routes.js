//const  { Router } = require("express")
import { Router } from "express"


const routes = new Router()

routes.get('/' , (request, response)=> {
    return response.json({message:"CODE-BURGER  arrumado CONST X IMPORT 30-11-22 AS 21:18"})       
})

 //module.exports=routes

 export default routes