import React from "react";

const Loading = (props) => {

    if(props.status){
      return (
        <div id="loading"></div> 
       );
    } else {
      return (
        null
      )
    }
     
}


export default Loading;