import { SECTION_DATA } from "./data/sectionData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <canvas
        className="bg-cover absolute bottom-0 top-0 md:top-[-25vh] \ left-0 w-[100vw] h-[100vh] transform origin-[0.08% 100%] skew-y-[-16deg] scale-[120%] overflow-hidden border-none"
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
        className="absolute w-full h-full absolute bottom-0 top-0 md:top-[-25vh] \ left-0 w-[100vw] h-[100vh] transform origin-[0.08% 100%] skew-y-[-16deg] scale-[120%] overflow-hidden border-none mix-blend-color-dodge z-[-1]"
      >
        <source
          src="https://player.vimeo.com/external/368730818.sd.mp4?s=c3953421878536e1a7db904cae7dae03e7bfad19&amp;profile_id=164&amp;oauth2_token_id=57447761"
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
