import {  useState } from "react";

const Post = ({ country,handleVisitedPost }) => {
  const [visited, setVisited] = useState(false);
  const [likes, setLikes] = useState(country.reactions.likes);

  const handleLike = () => {setLikes(likes + 1)};

  const handleVisited = () => {
    setVisited(visited ? false : true);
    handleVisitedPost(country);
  };

  return (
    <div className="post border-2 border-gray-300 p-4 rounded">
      <h1 className="heading text-2xl">title: {country.title}</h1>
      <p>body: {country.body}</p>
      <div className="like flex gap-1.5">
        {" "}
        <button onClick={handleLike} className="btn bg-red-500 text-white px-4 py-2 rounded">
          Like
        </button>
        <h2>likes: {likes}</h2>
      </div>
      <h2>dislikes: {country.reactions.dislikes}</h2>
      <h2>views: {country.views}</h2>
      <h3>tags: {country.tags.join(", ")}</h3>

      <button
        onClick={handleVisited}
        className={`btn text-white px-4 py-2 rounded mt-4 ${
          visited ? "bg-green-500" : "bg-blue-500"
        }`}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Post;
