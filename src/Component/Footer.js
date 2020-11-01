import React from 'react';

const footerStyle ={
    body: {
        padding: "1rem",
        fontSize: "2rem",
        textAlign: "center",
        backgroundColor: "#333",
        color: "#eaeaea",
    },
    link: {
        textDecoration: 'none',
        color: "#eaeaea",
    }
}
function Footer(){
    return(
        <footer style={footerStyle.body}>
            Made with <span style={{color:"red"}}>❤</span> from <a style={footerStyle.link} href="https://benjee.com.ng" rel="noopener noreferrer" target="_Blank" ><b>Benjee</b></a>
        </footer>
    )
}

export default Footer;