import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

const Home = () => {
  return (
    <div className="flex flex-col">

      {/* Hero section */}
      <div className="h-full w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">

        {/* Left side — text content */}
        <div className="flex flex-col gap-10 md:gap-14">

          {/* Heading */}
          <div className="font-bold flex flex-col gap-2.5 font-mono">
            {/* text-4xl on mobile, text-7xl on desktop */}
            <p className="text-4xl md:text-7xl">Nice to meet you!</p>
            <p className="text-4xl md:text-7xl">
              I'm{" "}
              <u className="font-bold decoration-blue-500 underline-offset-8">
                Adesh Shahi
              </u>
              <span>.</span>
            </p>
          </div>

          {/* Description */}
          {/* w-full on mobile, w-lg on desktop */}
          <div className="w-full md:w-lg font-semibold font-mono leading-relaxed text-sm md:text-base">
            Full Stack Developer specializing in building scalable, end-to-end
            applications with responsive UIs, robust server-side logic, and
            efficient database architectures. I am a proactive problem-solver and
            disciplined Git/GitHub collaborator committed to clean code,
            continuous learning, and delivering high-quality digital products.
          </div>

          {/* Contact link */}
          <div className="font-mono">
            <u className="decoration-blue-500 underline-offset-8">
              <a href="contact" className="font-bold text-xl md:text-2xl">
                CONTACT ME
              </a>
            </u>
          </div>

        </div>

        {/* Right side — profile image */}
        {/* Full width on mobile, 1/3 width on desktop */}
        {/* Image smaller on mobile, larger on desktop */}
        <div className="w-40 h-40 md:w-80 md:h-80 flex-shrink-0">
          <img
            src="adpp.jpeg"
            alt="Adesh Shahi"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

      </div>

      <About/>
      <Contact/>
      <Projects/>

    </div>
  );
};

export default Home;