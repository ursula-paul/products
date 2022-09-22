import { req, res } from 'express';
import {usermodel} from '../models/users.models'


app.post('/',(req,res)=>{
    res.send({
        status:200,
        message:{
            userCreated
        }
    })
})
// create a product
app.post ('/',(req,res)=>{
    res.send({
        status:200,
        message:{
            productCreated
        }
    })
})


