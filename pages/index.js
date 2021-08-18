import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieFranchise from "../components/MovieFranchise";
import ShowCollection from "../components/Movies/ShowColllection";
import MovieCollection from "../components/Movies/MovieCollection";
// import Movies from "../components/Movies/MovieCollection";
import Slider from "../components/Slider";

const API_KEY = process.env.API_KEY;

export default function Home({
  session,
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) {
  return (
    <div>
      <Head>
        <title>Disney+ || Jestor Nogueiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* {session ? <Movies /> : <Hero />} */}

      <main className="relative min-h-screen after:bg-homeImage after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <MovieFranchise />

        {/* popular and top rated movies props */}
        <MovieCollection
          title={"Popular Movies"}
          ResponseData={popularMovies}
        />
        <MovieCollection
          title={"Top Rated Movies"}
          ResponseData={topRatedMovies}
        />
        {/* popular movies props  */}
        <ShowCollection title={"Popular Shows"} ResponseData={popularShows} />

        <ShowCollection
          title={"Top Rated Shows"}
          ResponseData={topRatedShows}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const session = await getSession(context);

  // Multiple fech request
  const [
    popularMovies,
    popularShows,
    topRatedMovies,
    topRatedShows,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
  ]);
  //response we get
  // const [
  // popularMovies,
  // popularShows,
  // topRatedMovies,
  // topRatedShows,
  // ] = await Promise.all([
  // converting the response in json
  // popularMovies.json(),
  //   popularShows.json(),
  //   topRatedMovies.json(),
  //   topRatedShows.json(),
  // ]);
  // OR you can do it in traditional way of fetching the data like so:
  // const request = await fetch(
  //   `https://api.themoviedb.org/3${
  //     requests[genre]?.url || requests.fetchTrending.url
  //   }`
  // ).then((res) => res.json());

  return {
    props: {
      // session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topRatedMovies: topRatedMovies.results,
      topRatedShows: topRatedShows.results,
    },
  };
}
