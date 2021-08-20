import Image from "next/image";
// import { signIn, signOut, useSession } from "next-auth/client";
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Header = () => {
  // const [session, loading] = useSession();
  const router = useRouter();
  return (
    <header className="flex items-center sticky top-0 z-[1000] h-16 px-8 bg-[#040714] md:px-12">
      <Image
        src="/images/logo.svg"
        height="80px"
        width="80px"
        alt="header image"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      {/* {session && ( */}
      <div className=" hidden ml-10 md:flex md:space-2 md:gap-3.5">
        <a className="text-white header-link group">
          <HomeIcon className="h-5" />
          <span className="span mx-4">Home</span>
        </a>
        <a className="text-white header-link group">
          <SearchIcon className="h-5" />
          <span className="span mx-4">search</span>
        </a>
        <a className="text-white header-link group">
          <PlusIcon className="h-5" />
          <span className="span">watchlist</span>
        </a>
        <a className="text-white header-link group">
          <StarIcon className="h-5 my-2" />
          <span className="span">originals</span>
        </a>
        <a className="text-white header-link group">
          <img src="/images/movie-icon.svg" className="h-5" alt="movie" />
          <span className="span">movies</span>
        </a>
        <a className="text-white header-link group">
          <img src="/images/series-icon.svg" className="h-5" />

          <span className="span">series</span>
        </a>
      </div>
      {/* )} */}

      {/* {!session ? ( */}
      <button
        className="ml-auto uppercase border px-3.5 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
        // onClick={signIn}
      >
        LogIn
      </button>
      {/* ) : ( */}
      <div>
        {/* <img
            src={session.user?.image}
            src="/images/logo.svg"
            className="rounded-full object-cover cursor-pointer ml-auto h-12 "
          /> */}
        {/* <p className="px-5">Hello,{session.user?.name}</p> */}
        {/* <h3 onClick={signOut} className="cursor-pointer"> */}
        {/* Sign Out */}
        {/* </h3> */}
      </div>
      {/* )} */}
    </header>
  );
};

export default Header;
