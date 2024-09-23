"use client"
export default function Page(){
    async function handleForm(data:FormData){
        console.log(data.get('image'))
         let res=await fetch('/api/testApi',{
            method:"POST",
            body:data
         })
         .then((val)=> val.json()).then(val2=>console.log(val2))
    }
    return(
        <>
        <h1 className="text-center">
            Form
        </h1>
        <form action={handleForm} >
            <input type="file" name="image"  accept="image/*"/>
            {/* <input type="text" name="name" id="" /> */}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}