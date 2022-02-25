import React from "react";
import BlogList from "./BlogList";
import LayoutHeader from "./LayoutHeader";
import useFetch from "./useFetch";

const tempUrl = "http://localhost:8000/blog";
const BlogPosts = () => {
	const { data, loading, error } = useFetch(tempUrl);
	return (
		<>
			<LayoutHeader
				title="All Posts"
				button="Create New Blog"
				buttonLink="/create"
			/>
			{loading && <h1 className="loading">Loading...</h1>}
			{error && <h1 className="loading">{error}</h1>}
			{!loading &&
				data &&
				data.map((item) => <BlogList key={item.id} {...item} />)}
		</>
	);
};

export default BlogPosts;
