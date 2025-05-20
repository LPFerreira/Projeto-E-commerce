import mongoose from 'mongoose'

async function connectDatabase() {
  await mongoose.connect(
    'mongodb+srv://luizpcooltra:GE1uj2xP7Ykws0bp@cluster0.dyxt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
//mongoDB test - users//

}


export default connectDatabase;