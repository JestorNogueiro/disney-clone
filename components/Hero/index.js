import Head from "next/head";
import Image from "next/image";
function Hero() {
  return (
    <section>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Log in || Disney+</title>
      </Head>

      <div className="relative min-h-calc(100vh- 78px)">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3  top-1/4 w-full justify-center items-center p-8 mx-auto -mt-16 max-w-screen-sm ">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
          />
          <button>Get All There</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
