function Loader() {
  return (
    <div className="bg-black/80  text-white flex flex-col items-center justify-center inset-auto top-[10px] fixed h-[calc(100vh-10px)] z-[10000] w-[100%] gap-46 ">
      <div className="mb-[50px] ">
        <img src="/images/logo.svg" alt="loading. " className="h-10 " />
        <h2 className=" text-3xl text-center  ">Loading...</h2>
      </div>
      <p className=" mt-[200px] font-bold">
        <p className="text-white/60 font-medium">Developed By</p> Jestor
        Nogueiro
      </p>
    </div>
  );
}

export default Loader;
