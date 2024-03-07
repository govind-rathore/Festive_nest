import React from "react";
import Qrcompo1 from "../Components/Qrcompo1.js";
import Qrcompo3 from "../Components/Qrcompo3.js";
import Qrcompo4 from "../Components/Qrcompo4.js";
import Qrcompo2 from "../Components/Qrcompo2.js";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";


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
