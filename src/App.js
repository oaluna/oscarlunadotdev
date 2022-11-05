import { SECTION_DATA } from "./data/sectionData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App overflow-x-hidden">
      <canvas
        className="bg-cover bg-no-repeat bg-center absolute bottom-0 top-0 md:top-[-25vh] \ left-0 w-[100vw] h-[100vh] transform origin-[0.08% 100%] skew-y-[-16deg] scale-[120%] overflow-hidden border-none"
        style={{
          backgroundColor: "hsla(0,100%,50%,1)",
          backgroundImage:
            "url(https://zimed.vercel.app/assets/images/background/banner-bg-1-1.png)",
        }}
      ></canvas>
      <video
        autoplay="true"
        muted="true"
        loop="true"
        speed="0.25"
        className="bg-cover absolute bottom-0 top-0 md:top-[-25vh] \ left-0 w-[100vw] h-[100vh] transform origin-[0.08% 100%] skew-y-[-16deg] scale-[205%] md:scale-y-[305%] overflow-hidden border-none mix-blend-overlay z-[-1] rotate-[74deg]"
      >
        <source
          src="https://player.vimeo.com/external/546956779.hd.mp4?s=b0a4d785770319ed4e7b3430ae2537e85f42c95b&profile_id=175&oauth2_token_id=57447761"
          type="video/mp4"
        ></source>
      </video>
      <NavBar />

      <div className="snap-y snap-mandatory z-1">
        {SECTION_DATA.map((section) => (
          <div className="snap-always snap-center">{section.component}</div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
