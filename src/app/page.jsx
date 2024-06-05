import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full gap-4 flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image
          src="/hero.png"
          alt=""
          className="object-contain"
          fill
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="gap-8 md:h-1/2 flex flex-col md:gap-8 items-center justify-center">

        <h1 className="text-xl md:text-4xl font-bold">
          Junior Developer
        </h1>
        <p className="text-xs md:text-base">
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
