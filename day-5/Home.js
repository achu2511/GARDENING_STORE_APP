import React from "react";
import Navbar from "../components/Nav";
import plant from "../images/hanging-pothos-plant-gray-removebg-preview.png";


function Home() {
    return (
      <>
        <Navbar/>
        <div className="h-cont">
            <div className="h-search">
                <div className="h-search-box">
                    <div className="h-search-quote">
                        {/* <p>
                            Loved by gardens 
                        </p>
                        <p>
                            Trusted by gardeners 
                        </p> */}
                    </div>
                    <img src={plant}/>
                </div>
            </div>
            
        </div>
      </>
    );
  }
  
export default Home;