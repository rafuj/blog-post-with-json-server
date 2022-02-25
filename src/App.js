import logo from "./logo.svg";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a href="/">
					<img src={logo} className="App-logo" alt="logo" />
				</a>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
