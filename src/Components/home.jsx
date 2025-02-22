import React from "react";
import "./home.scss";
import About from "./about";
import Navbar from "./navbar";
import Projects from "./projects";
import ContactForm from "./contacform";
const Home = () => {
  return (
    
    <div className="main_outter">
    {/* <div className="nav-holder w-screen"><Navbar/></div>   */}
      <div className="main">
        <div className="home_sec01">
          <div className="sec_con">
            <div className="right_sec">
              <div>
                <p className="content-1">Fontend Developer</p>
                <p className="name hover:animate-bounce hover:text-color-red text-blue-800">
                  Hello, my name is Madelyn Torff
                </p>
                <p className="content">
                  I'm a frontend developer and work in Raipur Chhattishgarh
                </p>
                <div className="button-holder gap-12 w-80 mt-20 ">
                <button className="button">Projects</button>
                <button className="button-2 ">LinkedIn</button>
              </div>
              </div>
             
            </div>
            <div className="left_sec">
              <img
                className=""
                src="/images/profile-image.png"
                alt="Description of the image"
              />
            </div>
          </div>
        </div>
               <Projects/>  
       
       
      </div>
    </div>
  );
};

export default Home;
