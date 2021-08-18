import Image from "next/image";
import { useRouter } from "next/router";

function MovieThumbnail({ result }) {
  // const BASE_URL = "https://image.tmdb.org/t/p/original/";
  // console.log(result);
  const router = useRouter();
  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[300px] md:min-h-[200px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/show/${result.id}`)}
    >
      {/* <h1>{result.title}</h1> */}
      <Image
        src={
          `https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }` || `https://image.tmdb.org/t/p/original/${result.poster_path}`
        }
        width={300}
        height={200}
        alt={result.title}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}

export default MovieThumbnail;
