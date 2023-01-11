import React,{useRef, useEffect , useState} from "react";
import $ from 'jquery';
import "./jquery.easypiechart.min.js";
import { Link } from "react-router-dom";


const CurAmount = (props) => {

    const eleRef = useRef(null);    

    useEffect(() => {
        // console.log(eleRef);
        $(eleRef.current).easyPieChart({
            easing: 'easeOutElastic',
            delay: 3000,
            trackColor: "#d7e3fb",
            scaleColor: "#3868e2",
            scaleLength:5,
            lineWidth: 10,
            trackWidth: 10,
            size: 150,
            lineCap: 'round',
              onStep: function(from, to, percent) {
                  // this.el.children[0].innerHTML = Math.round(percent);
              }
          });

          if(props.remainingData > 0 ) {
        //run when refresh api call is started
          if(props.refresh){
            
            $(eleRef.current).data('easyPieChart').update(0);
      
        }
        
        //run when refresh api call is loaded
        if(eleRef.current){
            return () =>  $(eleRef.current).data('easyPieChart')?.update(props.remainingData/props.maxData * 100);
        }

      }
        
    },[props]);

    


    if(props.remainingData > 0 ){

        const getPercent = props.remainingData/props.maxData * 100;
        

      return (
        <div id="startPercent"  className="skill-item center-block">
          <div className="chart-container">
            <div className="chart" ref={eleRef} id="percent" data-percent={getPercent} data-bar-color="#3868e2">
              <span className="percent"><span id="remainingData">{props.remainingData} GB </span><br/>
                out of <span id="maxData">{props.maxData} GB</span>
              </span>
            </div>
          </div>
        </div>
      );


    } else {

      return (
        <div className="circle">
        <Link to="data-packages">Start</Link>
        </div>
      );

    }

    

  }


export default CurAmount;