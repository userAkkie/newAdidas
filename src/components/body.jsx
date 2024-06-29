import adidasRek from "../pages/adidasRek.mp4";

const Body = () => {
  return (
    <div>
      <div className="relative h-auto overflow-hidden min-h-[400px]">
        <video
          loop
          src={adidasRek}
          type="video/mp4"
          className="bg-red-500 h-full object-cover min-h-[400px]"
          autoPlay
          muted
        />
        <div className="absolute bottom-[50px] left-[70px]">
          <h1 className="text-white font-bold text-4xl">YOU GOT THIS</h1>
          <p className="text-white tracking-[0.12em] py-4">
            When you play free of expectations, pressure doesn't stand a chance.
          </p>
          <button className="bg-white tracking-wide py-3 px-6 font-bold mt-2 hover:text-gray-500 transition-all">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
