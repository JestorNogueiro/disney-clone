import { useEffect } from "react";
import Image from "next/image";
// import RingLoader from "react-spinners/RingLoader";
function Loader2({ set }) {
  useEffect(() => {
    setTimeout(() => {
      // console.log("set interval fires");
      set();
    }, 3800);
  }, []);
  return (
    <div className="bg-black/80  text-white flex flex-col items-center justify-center inset-auto top-[10px] fixed h-[100vh] z-[10000] w-[100%] ">
      <div className="mb-[20px] ">
        <Image
          src="/images/logo.svg"
          alt="loading. "
          height={105}
          width={150}
          loading="eager"
        />
        <h2 className=" text-3xl text-center  ">Loading...</h2>
        {/* <RingLoader /> */}
      </div>
      <Image
        src="/spinner.svg"
        width={60}
        height={60}
        alt="spinner"
        className="my-4"
      />
      {/* <p className=" mt-[200px] font-bold">
        <p className="text-white/60 font-medium">Developed By</p> Jestor
        Nogueiro
      </p> */}
    </div>
  );
}

export default Loader2;
