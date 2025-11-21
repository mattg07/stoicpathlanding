import Image from "next/image";
import FAQ from "./components/faq";
import FadeInWhenVisible from "./components/FadeInOnSccroll";
import Typewriter from "./components/Typewriter";
import ToolsCarousel from "./components/ToolsCarousel";

export default function Home() {
  return (
    <main className="pt-40  text-cente0r max-w-full">
      {/* Background */}
      <div className="absolute inset-0  -z-10 bg-gradient-to-b from-sky-100 via-green-100 to-white " />
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 w-full max-w-7xl mx-auto px-2 pb-48">
        {/* Headline + CTA */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1
            className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold text-black leading-tight font-['MyFont'] text-center
      "
          >
            “Traveler, there is no path; the path is made by walking.”
          </h1>

          <p className="mt-4 text-gray-600 text-lg px-3">
            A mobile app to help you track your journey, manage your activities,
            and master yourself through insights.
          </p>

          <button className="mt-8 transition m-auto">
            <img
              src={"/download.png"}
              width={180}
              height={100}
              alt="Download"
            />
          </button>
        </div>

        {/* Phone Images */}
        <div
          className="
    flex flex-row md:flex-row
    justify-center md:justify-end
    gap-6 
    w-full md:w-auto
  "
        >
          <Image
            src={"/mainScreenTwo.png"}
            width={260}
            height={500}
            alt="App Screen"
            className="w-36 sm:w-48 md:w-60 h-auto"
          />
          <Image
            src={"/toolsScreenTwo.png"}
            width={260}
            height={500}
            alt="App Screen"
            className="w-36 sm:w-48 md:w-60 h-auto"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full -mt-44 md:-mt-28  pt-16 text-center px-8 bg-amber-50">
        <div>
          <Typewriter
            text="“Until you make the unconscious conscious, it will direct your life and you will call it fate.”"
            speed={40}
            className="text-2xl md:text-3xl font-semibold text-black font-['MyFont'] leading-snug pt-40"
          />
          <span
            id="howItWorks"
            className="block mt-3 text-sm font-semibold text-gray-500"
          >
            — Carl Jung
          </span>
          <span className="block w-[70%] h-0.5 bg-black mt-4 m-auto relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-black after:mt-1"></span>
          {/* After Two Weeks Section */}
          ...
          <FadeInWhenVisible>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-8 font-['MyFont'] mb-10">
              How does it work?
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-gray-100">
                <Image
                alt="Mindfull Icon"
                  className="m-auto"
                  src="/mindfull.webp"
                  height={90}
                  width={90}
                />
                <h3 className="text-lg font-semibold text-gray-900 font-['MyFont'] mb-2">
                  Deeper Self-Awareness
                </h3>
                <p className="text-gray-600 text-md">
                  Consistent journaling helps you uncover emotional patterns you
                  may not notice in daily life. Over time, you begin to
                  recognize what triggers stress, what brings you peace, and
                  which beliefs quietly influence your decisions. This deeper
                  awareness makes it easier to understand your needs, respond
                  instead of react, and grow into a more grounded, intentional
                  version of yourself.
                </p>
              </div>

              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-gray-100">
                <Image
                alt=" Better habits Icon"
                  className="m-auto"
                  src="/tummo.webp"
                  height={90}
                  width={90}
               />

                <h3 className="text-lg font-semibold text-gray-900 font-['MyFont'] mb-2">
                  Better Daily Habits
                </h3>
                <p className="text-gray-600 text-md">
                  Tracking your exercise and daily routines provides measurable
                  data that strengthens habit formation and long-term adherence.
                  Research shows that monitoring behaviors increases
                  consistency, enhances motivation through visible progress, and
                  helps identify patterns that influence performance, recovery,
                  and overall well-being. By observing your habits objectively,
                  you gain insights that support more effective and sustainable
                  health decisions.
                </p>
              </div>

              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-gray-100">
                        <Image
                  className="m-auto"
                  alt="Ai insights icon"
                  src="/nsdrtwo.webp"
                  height={90}
                  width={90}
                />
                <h3 className="text-lg font-semibold text-gray-900 font-['MyFont'] mb-2">
                  Personalized Insights with AI
                </h3>
                <p className="text-gray-600 text-md">
                  AI analyzes your progress to uncover meaningful trends,
                  highlight gradual improvements, and identify areas that may
                  need extra attention. By examining your entries over time, it
                  can detect subtle shifts in mood, energy, or behavior that are
                  often overlooked in day-to-day life. This deeper perspective
                  provides clearer insight into your personal growth, helping
                  you understand what supports your well-being, what holds you
                  back, and how your habits evolve.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="py-2 bg-amber-50 pt-40">
        <ToolsCarousel />
      </div>
      <div id="faq" className="w-full bg-amber-50 pt-20 pb-32">
        <FAQ />
      </div>
    </main>
  );
}
