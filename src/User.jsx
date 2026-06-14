import { use } from "react";

export default function User({userPromise}) {

    const userContent = use(userPromise);
    console.log(userContent);
    return(
        <>

        <div className="card-wrapper flex items-center justify-center">

        <div className="card border-2 border-gray-400 p-4 rounded-lg w-96">
        <h1>User: {userContent.length}</h1>

        </div>
        </div>
        </>
    )
}