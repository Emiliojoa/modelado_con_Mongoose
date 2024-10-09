import { Schema, model } from "mongoose"

const productSchema = new Schema({
    userProduct: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'userProduct',
    }
})

export default model("Productos", productSchema)