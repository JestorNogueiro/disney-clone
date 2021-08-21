import Image from "next/image";
function Loader() {
  return (
    <div className="bg-black/80  text-white flex flex-col items-center justify-center inset-auto top-[10px] fixed h-[calc(100vh-10px)] z-[10000] w-[100%] gap-46 ">
      <div className="mb-[50px] ">
        <Image
          src="/images/logo.svg"
          alt="loading. "
          height={120}
          width={180}
          loading="eager"
        />
        <h2 className=" text-3xl text-center  ">Loading...</h2>
      </div>
      <Image
        src="/spinner.svg"
        width={60}
        height={60}
        alt="spinner"
        className="my-4"
      />
      <p className=" mt-[200px] font-bold">
        <p className="text-white/60 font-medium">Developed By</p> Jestor
        Nogueiro
      </p>
    </div>
  );
}

export default Loader;
