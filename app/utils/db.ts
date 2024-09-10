import mongoose from "mongoose";

export async function dbConnect(){
    let url=process.env.connectionString!;

    // let connect:Promise<typeof mongoose>|null=null;
    let connect;

    if(!connect){
        connect=await mongoose.connect(url)
    }
    console.log('connected')
}