import React from "react";
import "./home.scss";
import About from "./about";
import Navbar from "./navbar";
import Projects from "./projects";
import ContactForm from "./contacform";
const Home = () => {
  return (
    
    <div className="main_outter">
    
      <div className="main">
        <div className="home_sec01">
        
          <div className="home-sec">
            <div className="home-left   ">   
              <div className="content-holder  ">
                <p className="content-1">Fontend Developer</p>
                <p className="home-heading">
                {/* text-5xl  text-gray-700 */}
                  Hello, my name is Madelyn Torff
                </p>
                <p className="home-content  text-gray-400">
                  I'm a frontend developer and work in Raipur Chhattishgarh
                </p>
                <div className="button-holder m-10 ">  
                <button className="button">Projects</button>
                <button className="button-2  ml-5">LinkedIn</button>
              </div>
              </div>
             
            </div>
            <div className="home-right ">
              <img
                className="myimage"
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
