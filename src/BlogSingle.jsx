import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import useFetch from "./useFetch";
const tempUrl = "http://localhost:8000/blog";
const BlogSingle = () => {
	const { id } = useParams();
	const { data, error, loading } = useFetch(`${tempUrl}/${id}`);

	const navigate = useNavigate();

	const handleDelete = () => {
		fetch(`${tempUrl}/${id}`, {
			method: "DELETE",
		}).then(() => navigate("/"));
	};

	return (
		<>
			<LayoutHeader title="&nbsp;" button="Back To Posts" buttonLink="/" />
			<div className="post__details">
				{loading && <h1 className="loading">Loading...</h1>}
				{!loading && error && <h1 className="loading">{error}</h1>}
				{!loading && data && (
					<article>
						<div className="post__item">
							<h3 className="post__item-title">{data.title}</h3>
							<p className="post-text">{data.body}</p>
							<span className="posted-by">Posted by {data.author}</span>
							<span className="btn" onClick={() => handleDelete(id)}>
								Delete
							</span>
						</div>
					</article>
				)}
			</div>
		</>
	);
};

export default BlogSingle;
