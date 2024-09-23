import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req:Request,res:NextApiResponse){
    
    let body=await req.formData()
    console.log(body,"req body")
return NextResponse.json({
    message:body
})

}