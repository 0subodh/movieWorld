const API_KEY = process.env.API_KEY;
import Results from "../components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}