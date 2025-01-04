import React from "react";
import Faq from "./Faq";

const Accordians = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <div className="container mx-auto shadow">
            <div className="container-fluid row text-lg-center text-capitalize">
                <div className="col-4 d-flex align-items-center"><h3>questions and answer about login</h3></div>
                <div className="col-8"><Faq/></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Accordians;
