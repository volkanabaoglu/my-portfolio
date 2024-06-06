import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full gap-4 flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero.png"
          alt=""
          className="lg:object-contain lg:p-20 -z-10"
          fill
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="gap-8 md:h-1/2 flex flex-col lg:h-full lg:w-1/2 md:gap-8 lg:items-start items-center justify-center">

        <h1 className="text-4xl md:text-6xl font-bold">
          Junior Developer
        </h1>
        <p className="md:text-xl">
          Hello, I'm Volkan Abaoglu, a computer engineering student based in Ankara, TR. I am passionate about web development, automation systems, and database management. My goal is to become a full-stack developer proficient in React and JavaScript technologies.
        </p>
        <div className="flex gap-4 ">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white ">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black ">Contact Me</button>
        </div>

      </div>
    </div>
  );
};

export default Homepage;
