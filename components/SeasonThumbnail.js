import Image from "next/image";
function SeasonThumbnail({ result }) {
  return (
    <section className="relative flex flex-1 flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto mt-10 mb-10">
      <h3 className="font-semibold md:font-extrabold tracking-wide">
        Season Details :
      </h3>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {result.seasons.map((pos) => (
          <div className="  flex space-x-3 bottom-2 " key={pos.id}>
            <div className="sm:font-light md:font-bold min-w-max space-y-2 mt-3">
              <p>{pos.name}:</p>
              <p>
                S: 0{pos.season_number} Ep: {pos.episode_count}
              </p>
              <p>{pos.air_date}</p>
            </div>
            <div className=" h-[250px] w-[150px] hover:scale-105 transition duration-300">
              <Image
                src={
                  pos.poster_path
                    ? `https://image.tmdb.org/t/p/original/${pos.poster_path}`
                    : `https://image.tmdb.org/t/p/original/${
                        result.poster_path || result.backdrop_path
                      }`
                }
                alt="no image found"
                height={250}
                width={150}
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeasonThumbnail;
