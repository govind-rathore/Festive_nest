import React from "react";
import Designcompo1 from "../Components1/Designcompo1";
import Designcompo2 from "../Components1/Designcompo2";
import Footer from "../Components1/Footer";
import Header from "../Components1/Header";

const Tdpage = () => {
    return (
        <div>
            <Header/>
            <div style={{ marginBottom: '30px' }} />
            <Designcompo1/>
            <div style={{ marginBottom: '30px' }} />
            <Designcompo2/>
            <div style={{ marginBottom: '20px' }} />
            <Footer/>


        </div>
        )
    };
    
    export default Tdpage;