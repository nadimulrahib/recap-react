import { use, useState } from "react";
import Post from "../Post/Post";

const Countries = ({ contriesData }) => {
    const [visitedPost, setVisitedPost] = useState([]);

    const handleVisitedPost= (country)=>{
        console.log("Visited Post: ", country);
        const visitCountry =[...visitedPost, country];
        setVisitedPost(visitCountry);
    }
    const countries = use (contriesData);
    const country = countries.posts
    console.log(countries);
    return (
        <div>
            <h1>Countries: {country.length}</h1>
            <h3>Visited Countries: {visitedPost.length}</h3>
            <div>
                {visitedPost.map((visit)=> <li key={visit.id}>{visit.title}</li>)}
            </div>
            <div className="countries grid grid-cols-3 gap-4">
                {country.map((country)=><Post key={country.id} country={country} handleVisitedPost={handleVisitedPost}/>)}
            </div>
        </div>
    );
};

export default Countries;