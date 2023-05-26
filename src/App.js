import { SECTION_DATA } from "./data/sectionData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import  SkillPage from "./pages/SkillPage"
import { Routes, Route } from "react-router-dom";


const Home = () => {
  return (
   
  

      <div className="snap-y snap-mandatory z-1">
        {SECTION_DATA.map((section) => (
          <div className="snap-always snap-center">{section.component}</div>
        ))}
      </div>

    
	
  );
}


export default function App () {
	return (
		<div className="App overflow-x-hidden scroll-smooth">
	<NavBar/>

	<Routes>
		<Route exact path="/" element={<Home />} />
		<Route exact path="/skill" element={<SkillPage />} />
	</Routes>
	<Footer />
	</div>
)}