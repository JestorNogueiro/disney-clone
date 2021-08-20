// import { getSession, useSession } from "next-auth/client";
import {
  ArrowCircleLeftIcon,
  ArrowDownIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  EmojiSadIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import SeasonThumbnail from "../../components/SeasonThumbnail";
const API_KEY = process.env.API_KEY;

function Show({ result }) {
  // const [session]= useSession()
  const router = useRouter();
  // console.log(result);
  const [showTrailer, setShowTrailer] = useState(false);
  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

  //checks wheather the fetched data have youtube video
  const videoLenght = result.videos.results.length;

  //   useEffect(()=>{
  // if (!session){
  //   router.push('/')
  // }
  //   },[])
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
            // quality={100}
            // width={1000}
            // height={1000}
            layout="fill"
            alt="poster image"
            // layout="fixed"
            // sizes="100vh"
            objectFit="cover"
            // className="fixed"
          />
          <div className="absolute inset-y-28  md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold hover:bg-black/40 max-w-max px-3.5">
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
                className="text-xs md:text-base bg-black/30 text-white flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6] hover:text-black hover:font-extrabold "
                onClick={() => setShowTrailer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt="play"
                  className="h-6 md:h-8 "
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
            <p className="max-w-max md:text-lg text-sm bg-black/50 px-3.5">
              No of Seasons : {result.number_of_seasons}
              {" ||"} No of Episodes : {result.number_of_episodes}
            </p>

            <h3 className=" text-sm md:text-lg max-w-4xl font-semibold hover:bg-black/50 px-2 md:line-clamp-6 line-clamp-7 ">
              {result.overview}
            </h3>
          </div>
          <ChevronDownIcon className=" absolute h-8  animate-bounce mx-auto bottom-[25px] flex left-0 right-0 " />

          <ArrowCircleLeftIcon
            className="absolute m-2 h-10 text-white/100 cursor-pointer "
            onClick={() => router.back()}
          />
        </div>
        {/* Display No  of seasons  */}
        <SeasonThumbnail result={result} />

        {showTrailer && (
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50" />
        )}
        {/* .....if ShowTailer is true than heading will display...... */}
        <div
          className={`absolute top-5 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-100 
          ${showTrailer ? "opacity-100 z-[1000] " : "opacity-0"} `}
        >
          <div className="flex items-center justify-between bg-black text-white p-3.5 z-[1000] border-b-2 border-white/40 rounded">
            <span className="font-semibold">Playing Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
              onClick={() => setShowTrailer(false)}
            >
              <XIcon className="h-5" />
            </div>
          </div>

          {/* if the video length is more than 0 the video will display */}
          {videoLenght > 0 ? (
            <div className="relative pt-[56.25%] z-[1000]">
              {/* responseve react player  */}
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                controls={true}
                style={{ position: "absolute", top: "0", left: "0" }} //styles is require for responssivness
                playing={showTrailer}
              />
            </div>
          ) : (
            <div className="bg-gray-600 p-7">
              <p className="flex items-center">
                <EmojiSadIcon className="h-10 " />
                <span className="px-3 font-bold"> SORRY</span>
              </p>
              <h1>No video to display</h1>
            </div>
          )}
        </div>
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

  // const seasonReq= await fetch(`https://image.tmdb.org/t/p/original/${result.poster_path}`)

  return {
    props: {
      // session,
      result: request,
    },
  };
}
