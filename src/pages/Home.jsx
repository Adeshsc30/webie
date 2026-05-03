import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';


const Home = () => {
  return (
    <div className="flex flex-col">
    <div className="h-full w-90% flex items-center justify-between">
      <div className="flex flex-col gap-14">
        <div className="font-bold flex flex-col gap-2.5 font-mono">
          <p className="text-7xl">Nice to meet you!</p>
          <p className="text-7xl">
            I'm{" "}
            <u className="font-bold decoration-blue-500 underline-offset-8">
              Adesh Shahi
            </u>
            <span>.</span>
          </p>
        </div>
        <div className="w-lg font-semibold font-mono leading-relaxed">
          Full Stack Developer specializing in building scalable, end-to-end
          applications with responsive UIs, robust server-side logic, and
          efficient database architectures. I am a proactive problem-solver and
          disciplined Git/GitHub collaborator committed to clean code,
          continuous learning, and delivering high-quality digital products.
        </div>
        <div className="font-mono">
          <u className="decoration-blue-500 underline-offset-8">
            <a href="contact" className="font-bold text-2xl">
              CONTACT ME
            </a>
          </u>
        </div>
      </div>
      <div className="h-1/3 w-1/3">
        <img src="adpp.jpeg" alt="" className="rounded-full" />
      </div>
    </div>
      <About/>
      <Contact/>
      <Projects/>
    </div>
  );
};

export default Home;
