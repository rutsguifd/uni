import axios from "axios";
import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import AddPost from "./AddPost";
import PostItem from "./PostItem";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import MyModal from "./UI/MyModal/MyModal";
import MySelect from "./UI/MySelect/MySelect.jsx";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, selectedSort, searchQuery);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };
  return (
    <div>
      <MyButton onClick={() => setModal(true)}>Add post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <AddPost create={createPost} />
      </MyModal>
      <MyInput
        placeholder="search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="sort by"
        options={[
          { name: "sort by name", value: "title" },
          { name: "sort by description", value: "body" },
        ]}
      />
      {sortedAndSearchedPosts.length ? (
        sortedAndSearchedPosts.map((post, number) => (
          <PostItem
            removePost={removePost}
            number={number + 1}
            post={post}
            key={post.id}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}
    </div>
  );
}

export default PostList;
