import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		const abortCont = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: abortCont.signal })
				.then((response) => {
					if (!response.ok) {
						throw Error("Could Not Fetch The Data from that resource");
					}
					return response.json();
				})
				.then((data) => {
					setData(data);
					setLoading(false);
					setError(false);
				})
				.catch((err) => {
					if (err.name === "AbortError") {
						console.log("Fetch Abort");
					} else {
						setLoading(false);
						setError(err.message);
					}
				});
		}, 500);

		return () => abortCont.abort();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
