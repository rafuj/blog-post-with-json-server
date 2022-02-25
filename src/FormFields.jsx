import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const tempUrl = "http://localhost:8000/blog";

const FormFields = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("rafuj");
	const [pending, setPending] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		setPending(true);
		fetch(`${tempUrl}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setPending(true);
			setPending(false);
			navigate("/");
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title" className="form-label">
						Blog Title
					</label>
					<input
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="body" className="form-label">
						Blog Body
					</label>
					<textarea
						id="body"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
				</div>
				<div className="form-group">
					<label htmlFor="title" className="form-label">
						Blog Author
					</label>
					<select
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					>
						<option value="rafuj">Rafuj</option>
						<option value="munna">Munna</option>
					</select>
				</div>
				<button className="post-btn" type="submit" disabled={pending}>
					{pending ? "Pending" : "Post Now"}
				</button>
			</form>
		</>
	);
};

export default FormFields;
