import React from "react";
import { Link } from "react-router-dom";
const BlogList = ({ title, body, id, author }) => {
	const info = body.substring(0, 200);
	return (
		<>
			<div className="post__item">
				<h3 className="post__item-title">
					<Link to={`blog/${id}`}>{title}</Link>
				</h3>
				<p className="post-text">{info}</p>
				<span className="posted-by">Posted by {author}</span>
			</div>
		</>
	);
};

export default BlogList;
