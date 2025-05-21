import mongoose from 'mongoose'

async function connectDatabase() {
  await mongoose.connect(
    'mongodb+srv://luizpcooltra:{passaword}.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
//mongoDB test - users//

}


export default connectDatabase;
