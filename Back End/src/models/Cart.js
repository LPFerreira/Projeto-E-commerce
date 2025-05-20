import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
   category: {
    type: String,
    required: true,
  },
    imagem: {
    type: String,
    required: true,
  },
  quantity: { 
    type: Number, 
    required: true,
 },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model('Cart', cartSchema)