import React, {  useEffect,useState } from "react";
import { Link } from "react-router-dom";
import services from '../services/';
import CurAmount from './CurAmount';
import Loading from "../commons/Loading";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Lang from "../commons/Lang";



 const Home = () => {

  const [currentPlan,setcurrentPlan] = useState({
    title:"Student Pro",
    remainingData:0,
    maxData:0,
    validUntil:0
  });
  const [currentBalance,setcurrentBalance] = useState(0);
  const [refreshTime,setrefreshTime] = useState("00:00 AM");
  const [validTime,setvalidTime] = useState();
  const [isLoading,setisLoading] = useState(true);
  const [Rotating,setRotating] = useState(false);

  useEffect(() => {

    
    services.getCurrentPlan().then(
      (response) => {
        // console.log(response);
        // currentBalance
        // refreshedAt

        if(response.currentPlan == null) {
          const rft = timeFormat(response.refreshedAt);
          setrefreshTime(rft);
          setcurrentBalance(Lang.Currency(response.currentBalance));
          setisLoading(false);
          
        }else {
          const rft = timeFormat(response.refreshedAt);
          setrefreshTime(rft);
          setcurrentPlan(response.currentPlan);
          setcurrentBalance(Lang.Currency(response.currentBalance));
          setisLoading(false);
        }
      }
      ).catch(
        (err) => {
          console.log(err);
        }
      );

      
  }, [])


  useEffect(() => {

    if(Rotating){
      services.getCurrentPlan().then(
        (response) => {
          // console.log(response);
          // currentBalance
          // refreshedAt
          if(response.currentPlan == null) {
            const rft = timeFormat(response.refreshedAt);
            setrefreshTime(rft);
            setcurrentBalance(Lang.Currency(response.currentBalance));
            setRotating(false);
            
          }else {
            const rft = timeFormat(response.refreshedAt);
            setrefreshTime(rft);
            setcurrentPlan(response.currentPlan);
            setcurrentBalance(Lang.Currency(response.currentBalance))
            setRotating(false);
          }
        });
    }
    

      
  }, [Rotating])

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });


  // console.log(currentPlan);

  const timeFormat = (refTime) => {
    let rftDate = new Date(refTime*1000);
    let h = rftDate.getHours() >= 12 ? rftDate.getHours() - 12 : rftDate.getHours() ;
    let m = rftDate.getMinutes();
    let ampm = rftDate.getHours( ) >= 12 ? ' PM' : ' AM';
    // console.log(rftDate+ " " + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ampm);
    let refreshedAt =("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ampm;
    return refreshedAt;
  }


  //  function diff_time(dt2) {
  //    var dt1 = new Date();
  //    var dt2 = new Date(dt2*1000);
  //    dt2.setHours(8);
  //    dt2.setMinutes(0);
  //    var diffMs = (dt2 - dt1); // milliseconds between now & Christmas
  //    var diffDays = Math.floor(diffMs / 86400000); // days
  //    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  //    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

  //    return diffHrs + " hours, " + diffMins + " minutes";

  //  }


  function diff_time(dt2) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
    var dt2 = new Date(dt2*1000);
    // console.log(monthNames[dt2.getMonth()] +" "+ dt2.getDate());
    return monthNames[dt2.getMonth()] +" "+ dt2.getDate();
  }


 
  if(isLoading){

    return (

      <>
      
        <div className="container">
          <div className="row valign-wrapper">
            <div className="col s4">
              <a href="#">
                <h5 className="title">Home</h5>
              </a>
            </div>
            <div className="col s8">
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card border-radius student-db">
                <div className="card-content">
                  <h5 className="title margin-5px-top"><Skeleton width={300} height={30} /></h5>
                  <p className="light-font"><Skeleton width={200} height={20} /></p>
                  <div className="row center padding-15px-top">
                    <div className="col b-skills s12 m6 offset-m3 justify-content-center flex-column">

                
                    <Skeleton width={160} height={160} circle={true} />

                      
                      <p className="refresh margin-10px-top">
                       <Skeleton width={80} height={20}  />
                      </p>
                    </div>
                  </div>
                  <div className="row valign-wrapper margin-20px-top">
                    <div className="col s8 m8">
                      <p className="fw-bold">Pay as your wish</p>
                      <p className="light-font text-gray">Starts Every day at 6 am</p>
                    </div>
                    <div className="col s2 offset-s2 m2 offset-m2">
                      <Link to="data-packages" className="waves-effect waves-light blue right buy btn border-radius-50px">
                        Buy
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-action blue-bg border-bottom-radius">
                  <div className="row valign-wrapper">
                    <div className="col s8 m8">
                      <p className="text-white">
                        <Skeleton width={180} height={20} />
                      </p>
                    </div>
                    <div className="col s2 offset-s2 m2 offset-m2">
                      {/* <a onClick={(e) => window.location.href = process.env.NODE_ENV==="development" ? "" : url}
                        className="waves-effect waves-default white-bg blue-text right buy btn border-radius-50px"
                        style={{ width: 100 }}
                      >
                        Top-up
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container padding-20px-bottom">
          <div className="row">
            <div className="col s12">
              <div className="card student-powerment-mission border-radius padding-20px-tb padding-20px-lr position-relative">
                <h5 className="text-white margin-0px-top">
                  Student Empowerment <br /> Mission
                </h5>
                <p className="text-white">
                  To Learn more about the students
                  <br />
                  Empowerment Mission. Tap know more
                </p>
                <div className="center float-link">
                <Link to="coming-soon" className="waves-effect waves-default white-bg blue-text center btn border-radius-50px">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    )

  }

  const remainData = Math.round(currentPlan.remainingData * 100) / 100;
  const maxData = Math.round(currentPlan.maxData * 100) / 100;
  let url = "";
  if(windowSize[0] > 480) {
      url = "https://dev-anandaselfcareweb.azurewebsites.net/top-up"
  }

    return (
      <>
        {/* <Loading status={isLoading}/> */}
        <div className="container">
          <div className="row valign-wrapper">
            <div className="col s4">
              <a href="#">
                <h5 className="title">Home</h5>
              </a>
            </div>
            <div className="col s8">
             
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card border-radius student-db">
                <div className="card-content">
                  <h5 className="title margin-5px-top">{currentPlan.title}</h5>

                  {/* <p className="light-font">{ `Valid for ${currentPlan.validUntil == 0 ? "0 hours, 0 minutes" : diff_time(currentPlan.validUntil)}` }</p> */}
                  <p className="light-font">{ `${currentPlan.validUntil == 0 ? "Valid till 8 AM" : "Valid till 8 AM " + diff_time(currentPlan.validUntil)}` }</p>
                  <div className="row center padding-15px-top">
                    <div className="col b-skills s12 m6 offset-m3 justify-content-center flex-column">

                
                      <CurAmount remainingData={remainData} refresh={Rotating} maxData={maxData} />

                      
                      <p className="refresh margin-10px-top">
                        Refreshed at {refreshTime}
                        <span className="refbtn" onClick={() => setRotating(true) }>
                          <i className={`material-icons dp48 ${Rotating ? "imageRot" : ""}`}>refresh</i>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row valign-wrapper margin-20px-top">
                    <div className="col s8 m8">
                      <p className="fw-bold">Pay as your wish</p>
                      <p className="light-font text-gray">Starts Every day at 6 am</p>
                    </div>
                    <div className="col s2 offset-s2 m2 offset-m2">
                      <Link to="data-packages" className="waves-effect waves-light blue right buy btn border-radius-50px">
                        Buy
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-action blue-bg border-bottom-radius">
                  <div className="row valign-wrapper">
                    <div className="col s8 m8">
                      <p className="text-white">
                        Main Balance - <span className="fw-bold">{currentBalance}</span>
                      </p>
                    </div>
                    <div className="col s2 offset-s2 m2 offset-m2">
                      {/* <a onClick={(e) => window.location.href = url}
                        className="waves-effect waves-default white-bg blue-text right buy btn border-radius-50px"
                        style={{ width: 100 }}
                      >
                        Top-up
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container padding-20px-bottom">
          <div className="row">
            <div className="col s12">
              <div className="card student-powerment-mission border-radius padding-20px-tb padding-20px-lr position-relative">
                <h5 className="text-white margin-0px-top">
                  Student Empowerment <br /> Mission
                </h5>
                <p className="text-white">
                  To Learn more about the students
                  <br />
                  Empowerment Mission. Tap know more
                </p>
                <div className="center float-link">
                  <Link to="coming-soon" className="waves-effect waves-default white-bg blue-text center btn border-radius-50px">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    )

}


export default Home;