import React from "react";
// import "./style.css";
import { Link } from "react-router-dom";

const ComingSoon = () => {

    const comingSoon = {
        backgroundColor: "#206aed",
        padding: "10px",
        fontFamily: "Arial",
        // minHeight:"100vh",
        height:"100%"
      };

    const button = {
        color: "#fff",
        padding: "6px 22px",
        textTransform: "uppercase",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "solid 2px transparent",
        cursor: "pointer"
    }


    return (
        <>
            <div style={comingSoon}>
                <div className="container" style={{textAlign:"center"}} >
                    <h3 style={{color:"#fff"}} className="paddingTop">
                        Coming Soon
                    </h3>
                    
                    <Link to="/" style={button}>Go Back to Home</Link>

                    <p style={{color:"#206aed"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl odio, facilisis ac pellentesque ut, tristique eget nisi. Aliquam semper molestie massa eu dictum. Cras tincidunt quis nunc ac gravida. Nunc pretium libero leo, et vulputate quam facilisis et. Nulla feugiat nisl ultricies arcu ultrices, ac bibendum nunc imperdiet. Ut suscipit sapien leo, et egestas urna iaculis id. Cras eget iaculis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis felis aliquam, molestie nisl quis, mollis purus. Nam at scelerisque massa. Sed tellus arcu, laoreet eu risus rhoncus, auctor feugiat tellus. Donec arcu metus, dapibus vel vulputate placerat, fringilla at est. Donec lobortis nisl sit amet lacus porttitor sodales. Mauris rutrum vehicula faucibus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl odio, facilisis ac pellentesque ut, tristique eget nisi. Aliquam semper molestie massa eu dictum. Cras tincidunt quis nunc ac gravida. Nunc pretium libero leo, 
                    </p>
                </div>
            </div>
        </>
    )
}

export default ComingSoon;