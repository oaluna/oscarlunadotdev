import {useState} from 'react'
import { SECTION_DATA } from "./data/sectionData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {
	const [isScrolled, setIsScrolled] = useState(false);

	

	
const arrayOfColors = [
  "#bb2649",
  "#cbd4c2",
  "#dbebc0",
  "#C3B299",
  "#6665DD",
  "#540d6e",
  "#f4bfdb",
  "#9f9fad",
  "#aecfdf",
  "#f7f052",
  "#1f1300",
  "#69995d",
  "#f5f8de",
  "#ffc857",
  "#1a535c",
  "#44ccff",
  "#ea9ab2",
  "#43bccd",
  "#eabda8"
];

const randomIndex = arrayOfColors[Math.rand(0, arrayOfColors.length)];


  return (
    <div className="App overflow-x-hidden scroll-smooth">
     
      <NavBar />

      <div className="snap-y snap-mandatory z-1">
        {SECTION_DATA.map((section) => (
          <div className={`snap-always snap-center 
					${isScrolled ? "bg-[va(randomIndex)]" : "bg-transparent"}`}>{section.component}
					</div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
