import { use } from "react";

const Countries = ({ contriesData }) => {
    const countries = use (contriesData);
    const country = countries.posts
    console.log(countries);
    return (
        <div>
            <h1>Countries: {country.length}</h1>
        </div>
    );
};

export default Countries;