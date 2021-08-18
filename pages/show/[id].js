// import { getSession, useSession } from "next-auth/client";
import { PlusIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../../components/Header";

const API_KEY = process.env.API_KEY;

function Show({ result }) {
  // const [session]= useSession()
  console.log(result);
  const [showTrailer, setShowTriler] = useState(false);
  return (
    <div>
      <Head>
        <title>{result.title}</title>
      </Head>
      <Header />

      {/* section */}
      <section>
        <div className="relative min-h-[calc(100vh-78px)]">
          <Image
            src={
              `https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
              }` || `https://image.tmdb.org/t/p/original/${result.poster_path}`
            }
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {result.title || result.original_name}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  src="/images/play-icon-black.svg"
                  alt="play"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>
              <button
                className="text-xs md:text-base bg-black/30 text-white flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                onClick={() => setShowTriler(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt="play"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>
              <div className="flex justify-center items-center rounded-full border-2 border-white w-11 h-11 cursor-pointer bg-black/60 ">
                <PlusIcon className="h-6 " />
              </div>
              <div className="flex justify-center items-center rounded-full border-2 border-white w-11 h-11 cursor-pointer bg-black/60 ">
                <img src="/images/group-icon.svg" alt="group" />
              </div>
            </div>
            <p className="text-xs md:text-sm">
              {result.release_date || result.first_air_date}.{" "}
              {Math.floor(result.runtime / 60)}h{result.runtime % 60}m .{" "}
              {result.genres.map((genre) => genre.name + " ")}
            </p>
            <h4 className="tracking-wide text-sm md:text-lg max-w-4xl font-semibold">
              {result.overview}
            </h4>
          </div>
        </div>
        {showTrailer && (
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50" />
        )}
        <div className="absolute">play trailer</div>
      </section>
    </div>
  );
}

export default Show;

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  const { id } = context.query;
  // Append to response for geting the video details from tmdb
  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());
  return {
    props: {
      // session,
      result: request,
    },
  };
}
