import React from "react";
import {
MDBIcon, MDBContainer, MDBFooter, MDBCol, MDBRow
} from "mdbreact";
import mdbreact from '../assets/images/mdb-react.png';
//import outsystemslogo from '../assets/images/outsystems.png';

const Footer = () => {
    const icons = [
        {
          icon:'facebook',
          alt:'Facebook Profile',
          title:'https://www.facebook.com/raymark.florentino.9',
          className:"custom-fab-fb p-3",
        },
        {
          icon:'linkedin',
          alt:'LinkedIn Profile',
          title:'https://www.linkedin.com/in/raymark-florentino-283344153/',
          className:"custom-fab-linkedin p-3",
        },
        {
          icon:'github',
          alt:'Github Profile',
          title:"https://github.com/citrflorentino",
          className:" custom-fab-github p-3"
        }
    ]
     
    const openInTab = (url,e)=>{
      e.preventDefault();
      var win = window.open(url);
      win.focus();
    }

    return(
    <MDBFooter color="winter-neva-gradient" style={{bottom:'0', marginTop:'auto',}}>
            <MDBContainer fluid style={{backgroundColor: 'rgba(0,0,0,0.2)'}} className="py-3 text-center text-md-left" >
            <MDBRow>
              <MDBCol lg="12" md="12" className="text-center mt-3">
                <h5 className="title font-weight-bold"> You can also reach me at</h5>
                {
                    icons.map((item,idx) =>
                    (
                        <MDBIcon fab 
                        onClick={e => openInTab(item.title,e)}
                        className={item.className} 
                        icon={item.icon} 
                        alt={item.alt} 
                        title={item.title}
                        size="2x"
                        key={idx}>
                        </MDBIcon>
                    ))
                }
              </MDBCol>
            </MDBRow>
            </MDBContainer>
        
    </MDBFooter>
    );
}
export default Footer;