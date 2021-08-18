import Image from "next/image";
function MovieFranchise() {
  return (
    <section className="flex flex-col justify-center items-center mt-10 gap-5 px-8 max-w-[1400px] md:flex-row">
      <div className="brand group ">
        <Image src="/images/disnep.png" layout="fill" objectFit="contain" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden items-center rouded-lg object-cover group-hover:inline"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group ">
        <Image src="/images/marvel.png" layout="fill" objectFit="contain" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden items-center rouded-lg object-cover group-hover:inline"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group ">
        <Image src="/images/pixar.png" layout="fill" objectFit="contain" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden items-center rouded-lg object-cover group-hover:inline"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group ">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="contain"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden items-center rouded-lg object-cover group-hover:inline"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group ">
        <Image src="/images/starwars.png" layout="fill" objectFit="contain" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden items-center rouded-lg object-cover group-hover:inline"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default MovieFranchise;
