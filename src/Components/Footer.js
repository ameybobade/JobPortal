import React from 'react'

export default function Footer() {
    const footerStyle ={
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "50px",
        backgroundColor: "#0d6efd",
        color: "white",
        textAlign: "center",
        paddingTop: "20px",
        fontSize: "10px",
      };
    return (
        
        <footer style={footerStyle}>
            <b>This is a test site and the information posted here is not valid for use for any external individual yet.</b>
        </footer>
    )
}
