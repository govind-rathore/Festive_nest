import React from "react";
import Qrcompo1 from "../Components1/Qrcompo1.js";

import Qrcompo4 from "../Components1/Qrcompo4.js";
import Qrcompo2 from "../Components1/Qrcompo2.js";
import Header from "../Components1/Header.js";
import Footer from "../Components1/Footer.js";


const Qrpage = () => {
    return (
        <div>



        <Header/>
        <div style={{ marginBottom: '20px' }}></div>
        <Qrcompo1/>
        <div style={{ marginBottom: '20px' }}></div>
        <Qrcompo2/>
        <div style={{ marginBottom: '20px' }}></div>
        
        
        <Qrcompo4/>
        <div style={{ marginBottom: '20px' }}></div>
        <Footer/>
        
        </div>
    )
};

export default Qrpage;
