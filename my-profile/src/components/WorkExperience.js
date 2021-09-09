import React from 'react';
import {
    MDBContainer, MDBCol, MDBRow,
} from "mdbreact";
import cloudNinjaWallpaper from '../assets/images/website-banner4.png';
import act from '../assets/images/act.jpg';
import concentrix from '../assets/images/concentrix.jpg';

const WorkExperience = (props) => {

    return (
        <MDBRow className="mt-5">
            <MDBCol className="align-self-center" lg="6" md="6" sm="12" xs="12">
                <h2 className="text-center" data-aos="fade-up" data-aos-easing="ease-in-sine"> Work Experience</h2>
                <MDBContainer>
                    <p className="lead text-center" data-aos="fade-up" data-aos-easing="ease-in-sine">
                        These are my work experiences throughout from various companies
                    </p>
                </MDBContainer>
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12" xs="12">
                <MDBContainer className="pt-3 custom-div-jb text-center" data-aos="fade-up" data-aos-easing="ease-in-sine" style={{width:'60%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.3)'}}>
                    <p className="lead text-center b">
                    Technical Project Manager and Software Engineer at CloudNinjaPH
                    </p>
                    <p>
                    ( Jan 2020 - Present )
                    </p>
                    <hr className="my-2" />
                    <img src={cloudNinjaWallpaper} style={{maxWidth:"100%",height:'auto'}} alt="Cloud Ninja Logo"></img>
                    <p className="mt-2">
                    Cloud Ninja PH is a Software Solutions, AI, and Robotics Company providing reliable, hassle-free, value-for-money software solutions, products, and services.
                    </p>
                <MDBContainer>
                </MDBContainer>
                    <hr className="my-2" />
                    <p className="lead b">
                    Asian College of Technology (ACT) 
                    </p>
                    <p>
                    SHS TVL-ICT Teacher
                    ( Jun 2018 - May 2019 )
                    </p>
                    <img src={act} style={{maxWidth:'100%',height:'100px'}} alt="ACT Logo"/>
                    <p className="mt-2">
                    Asian College of Technology International Educational Foundation is a dynamic educational institution with esteemed professionalism committed to develop highly competent, globally competitive and socially responsible Asianistas
                    </p>
                <MDBContainer>
                </MDBContainer>
                    <hr className="my-2" />
                    <p className="lead b">
                    Concentrix
                    </p>
                    <p>
                    Technology Support Associate
                    ( May 2016 - Jul 2017 )
                    </p>
                    <img src={concentrix} style={{maxWidth:'100%',height:'100px'}} alt="ACT Logo"/>
                    <p className="mt-2">
                    Concentrix, is a technology-enabled global business services company specializing in customer engagement and improving business performance for some of the world’s best brands.
                    </p>
                <MDBContainer>
                </MDBContainer>
                </MDBContainer>
            </MDBCol>
        </MDBRow>
    );
}

export default WorkExperience;