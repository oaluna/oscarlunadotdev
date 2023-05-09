import NavBar from "./NavBar";
import Hero from "./Hero";

function Header() {
  return (
    <section className="p-[calc(5.1vh + 0.2rem + 2vh) 0 0 13vw] h-screen overflow-hidden">
      <NavBar />
      <Hero />
    </section>
  );
}

export default Header;