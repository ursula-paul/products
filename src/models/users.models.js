import { uid } from "uid"

const userSchema = new Schema({
    firstName :"string",
    lastName:"string",
    userid :uid(),
    email:"string"
})


const productSchema = new Schema({
    productName : "string",
    productId: uid()
})
 export const usermodel = mongoose.model('Users', userSchema)

 export const productmodel = mongoose.model ('Product', productSchema)