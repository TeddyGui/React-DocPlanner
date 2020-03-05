import React from 'react';
import logo from './doc-svg.png';
import './App.css';
import Navmenu from "./components/Navmenu"
import Intro from "./components/Intro"
import Cards from "./components/Cards"
import Svg from "./components/Svg"
import Health from "./components/Health"
import Vacation from "./components/Vacation"
import Footer from './components/Footer';

const parts = [
  {
    title: "For patients",
    subtitle: "Find a doctor, book a visit and solve any health-related doubt",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    isshown: true,
    sty:"Card-1" 
  },
  {
    title: "For doctors",
    subtitle: "Save time managing visits and  cut no-shows by half ",
    image : "https://www.docplanner.com/img/screen-saas@2x.png",
    isshown: false,
    sty:"Card-2"
  }
]



const menu = [
  { titre: "About us" },
  { titre: "Career"},
  { titre: "Departements", drop: ["Marketing & PR", "Customer Success & Sales", "IT, Product, Design & UX", "Finance & Administration", "HR & more"]},

]


function App() {
  return (
      <div>
      <Navmenu x={menu}  />
      <Intro  />
      <Cards objet={parts}  />
      
        {/* <div className="company"> */}
        <Svg />
        {/* </div> */}
        {/* <div className="Services"> */}
        <Health />
        {/* </div> */}
        {/* <div className="Vacation"> */}
        <Vacation />
        {/* </div> */}
        {/* <div className="Footer-1"> */}
        <Footer />
        </div>



  );
}

export default App;