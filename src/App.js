import { SECTION_DATA } from "./data/sectionData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App overflow-x-hidden scroll-smooth">
     
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
