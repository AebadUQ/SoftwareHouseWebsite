import React from "react";
import "./style.css";
const Homepage = () => {
  return (
    <div>
    <div className="container">
    <div className="con-left">
      <span>We are Creative</span>
      <p>
        We believe in our clients, and our strength comes in establishing
        tight working relationships in order to assist them in achieving
        their goals. As a result, we are able to generate and deliver value
        at each point of our clients' journey. We encourage open communication and encourage comments to
        help us learn and progress in the workplace.
        <br /> We encourage open communication and encourage comments to
        help us learn and progress in the workplace.{" "}
      </p>
      <button>Read More</button>
    </div>
    <div className="con-right">
      <img
        src="https://insights.datamark.net/wp-content/uploads/2020/11/top-5-business-processes-companies-prefer-outsource.png"
        alt=""
      
      />
    </div>
  </div>
     


  <div className="our-partners">
      <div className="partner1">
        <h2 style={{color:'#093e79'}}>
          Custom Effective <br />
          Software development
        </h2>
        <p style={{fontWeight:'500'}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
        <button>Read more </button>
      </div>
      <div className="partner2">
        <h2 style={{color:'#093e79'}}>Analyse Your Expensees On Every Device</h2>
        <p style={{fontWeight:'500'}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
        <button>Read more </button>
      </div>
      <div className="partner3">
        <h2 style={{color:'#093e79'}}>Creating a dedicated IT business growth</h2>
        <p style={{fontWeight:'500'}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
        <button>Read more </button>
      </div>
    </div>

    <div className="choose-us">
        <div className="choose-left">
        <h3 style={{color:'#bdc1c8'}}>Why choose us</h3>
        <h1>We Help You To Make Your Work Easy</h1>
        <p>We understand what your business means to you,your requirements considering trends.Smet nemo excepturi voluptas eligendi .</p>
        </div>
        <div className="choose-right">2</div>
    </div>
    </div>
  );
};

export default Homepage;
