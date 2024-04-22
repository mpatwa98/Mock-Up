import Image from "next/image";

export default function MockUp() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <Image src={"/frame-iphone.png"} width={270} height={546} alt="frame" />
        <div className="absolute top-0 left-1">
          <div className="h-[536px] w-[250px] rounded-3xl bg-blue-400"></div>
        </div>
        <div className="absolute top-1/3 left-1/3 bg-black">
          <Image
            src={"/photo.jpg"}
            width={100}
            height={100}
            alt="photo overlay"
          />
        </div>
        <div className="absolute bottom-1/3 left-1/2">
          <p className="text-white w-full text-center flex justify-center items-center">
            Title
          </p>
        </div>
        <div className="absolute bottom-1/4 left-1/2">
          <p className="text-white w-full text-center flex justify-center items-center">
            Description
          </p>
        </div>
        <div className="absolute top-0">
          <Image
            src={"/frame-iphone.png"}
            width={270}
            height={546}
            alt="frame"
          />
        </div>
      </div>
    </div>
  );
}
