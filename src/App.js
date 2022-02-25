import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import BlogSingle from "./BlogSingle";
import Create from "./Create";
import FormFields from "./FormFields";
import Layout from "./Layout";
import Navbar from "./Navbar";
function App() {
	return (
		<Router>
			<Navbar />
			<Layout>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<BlogPosts />
							</>
						}
					/>
					<Route
						path="/create"
						element={
							<>
								<Create />
								<FormFields />
							</>
						}
					/>
					<Route
						path="blog/:id"
						element={
							<>
								<BlogSingle />
							</>
						}
					/>
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
