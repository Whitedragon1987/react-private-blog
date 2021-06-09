import {useParams} from "react-router-dom";
import React, {useState} from "react";
import posts from "../data/posts.json";


function Blogpost() {
    let params = useParams()
    let [id, setId] = useState()
    let getBlogById=
        posts.find((post) => {if (params.id === post.id ) {
            return true} else return false})
    return (
        <div>
            <p> Totale aantal post: {posts.length}</p>
            <div key={getBlogById.id}>
                <h2>{getBlogById.title} gepost op: {getBlogById.date}</h2>
                <p>{getBlogById.content}</p>
            </div>
        </div>
    )};

export default Blogpost;