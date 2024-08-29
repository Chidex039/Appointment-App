import Navbar from "@/components/Navbar";

const indexPage = () => {
  return (
    <>
      <Navbar />
      <div className="background">
        <div className="flex flex-col justify-center items-center h-screen text-white">
          <h1 className="text-[60px] font-bold"> Avoid Hassles & Delays.</h1>
          <p className="text-[22px]">
            How is your health today? Sounds like not good!
          </p>
          <p className="text-[22px]">
            Do not worry, Find your doctor online. Book as you wish with DIFF
            Medical Centre.
          </p>
          <p className="text-[22px]">
            {" "}
            We offer you a free doctor channeking service. Make your appointment
            now!
          </p>
          <div>
            <button className="bg-blue-950 text-[20px] p-2 rounded-md hover:text-blue-400 mt-10">
              Make Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default indexPage;
