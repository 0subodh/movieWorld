import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex justify-center gap-20 bg-slate-700 py-4 text-xl text-white">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
