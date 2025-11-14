import Image from "next/image";
import img_one from "@/public/images/chris-montgomery-smgTvepind4-unsplash.jpg";
import img_two from "@/public/images/detail-co-Z7-J5dhQtwo-unsplash.jpg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="h-svh max-w-2/3">
        <header className="flex flex-col items-center">
          <div className="md:w-2xl">
            <h3 className="text-3xl font-bold pb-4 pt-4 text-gray-500">
              Hey! Meet
            </h3>
            <p className="text-6xl font-bold pb-4 pt-4">
              Video calls with anyone, anywhere
            </p>
            <p className="text-2xl pb-4 pt-4 text-gray-500">
              Stay connected and collaborate with friends, family and
              colleagues, no matter where you are.
            </p>
            <button className="bg-blue-400 px-8 py-3 rounded-[5px] text-[16px] hover:bg-blue-500 active:bg-blue-400 cursor-pointer ">
              Sign in
            </button>
          </div>
          <div className="pt-12 md:pt-48">
            <Image
              className="w-sm h-min rounded-3xl border-4 border-white shadow-md"
              src={img_two}
              alt="home"
            />
          </div>
        </header>
        <section className="pt-9 md:pt-36 flex flex-col items-center justify-center">
          <Image
            className="w-sm h-min rounded-3xl border-4 border-white shadow-md"
            src={img_one}
            alt="home"
          />
          <div className="md:w-md">
            <p className="text-4xl font-bold pb-4 pt-16">
              Experience rich, collaborative meetings with Hey-Meet
            </p>
            <p className="text-gray-500">
              Look and sound your best with studio look, studio sound and studio
              lighting. Connect in 65+ languages with translated captions. Use
              'take notes for me' for meeting details. Try all this and more to
              unlock the power of generative AI with Gemini for Google
              Workspace.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
