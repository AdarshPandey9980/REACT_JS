import React, { useState, useEffect } from "react";
import appwriteService from "../auth/configuration";
import { Container, Post } from "../components";

const AllPosts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        appwriteService.getAllPost([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    })
  return (
    <div className="w-full py-4">
        <Container>
            <div className="flex flex-wrap">
            {
                posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <Post key={post.$id} post={post}/>
                    </div>
                ))
            }
            </div>
        </Container>
    </div>
  );
};

export default AllPosts;
