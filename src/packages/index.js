import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Modal from "../commons/Modal";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import services from "../services";
import Lang from "../commons/Lang";
import backArrow from "../commons/back-arrow.png";



const Packages = () => {


  const [TabActive, setTabActive] = useState(0);
  
  const [isLoading, setisLoading] = useState(true);
  const [greenPlan,setgreenPlan] = useState([]);
  const [pinkPlan,setpinkPlan] = useState([]);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };


  useEffect(() => {

    services.getAllPlan().then(
      (response) => {
        // console.log(response);
        let getGreenPlan = [];
        let getPinkPlan = [];
        response[0].groupItems.map(value => {
          // console.log(value);
          if(value.dataLimit == 1){
            getGreenPlan.push(value);
          }else {
            getPinkPlan.push(value);
          }
          
        });
        setgreenPlan(getGreenPlan);
        setpinkPlan(getPinkPlan);
        // console.log(pinkPlan);
        setisLoading(false);
      }
    ).catch((err) => {
      console.log(err.message);
    });


  }, [])


  // console.log(Plan)


  const PackageOne = () => {

    const [buyId, setbuyId] = useState(0);

    const CreateBuyId = (id) => {
      setbuyId(id);
    }
  

    if (TabActive == 0) {

      if (isLoading) {
        
        return (

          <>
          
          <div id="pack-1" className="col s12 m6 tab-content padding-40px-bottom" style={{ padding: "0px" }}>
            <Slider {...settings}>

              <div className="col">
                <div className="packages green-box skeleton margin-10px-bottom border-radius padding-10px-tb padding-20px-lr">
                  <div className="row valign-wrapper">
                    <div className="col s9 m9 l10">
                      <h5 className="text-white margin-10px-bottom regular-font">
                        <Skeleton width={240} height={58} />
                      </h5>
                    </div>
                    <div className="col s3 m3 l2">
                      <div className="center">
                        <span className="valid-date">
                          <Skeleton width={59} height={48} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row margin-10px-top">
                    <div className="col s12">
                      <div className="left">
                        <Skeleton width={102} height={60} />
                      </div>
                    </div>
                  </div>
                  <div className="row margin-10px-top">
                    <div className="col s12">
                      <div className="left">
                        <Skeleton width={260} height={60} />
                      </div>
                    </div>
                  </div>
                  <div className="row margin-10px-top">
                    <div className="col s12">
                      <Skeleton width={470} height={52} className="mobileOk"/>

                    </div>
                  </div>
                </div>
              </div>


            </Slider>
          </div>
          
          <div id="pack-2" className="col s12 m6 tab-content padding-40px-bottom" style={{ padding: "0px" }}>
              <Slider {...settings}>
  
                <div className="col">
                  <div className="packages green-box skeleton margin-10px-bottom border-radius padding-10px-tb padding-20px-lr">
                    <div className="row valign-wrapper">
                      <div className="col s9 m9 l10">
                        <h5 className="text-white margin-10px-bottom regular-font">
                          <Skeleton width={240} height={58} />
                        </h5>
                      </div>
                      <div className="col s3 m3 l2">
                        <div className="center">
                          <span className="valid-date">
                            <Skeleton width={59} height={48} />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <div className="left">
                          <Skeleton width={102} height={60} />
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <div className="left">
                          <Skeleton width={260} height={60} />
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <Skeleton width={450} height={52} />
  
                      </div>
                    </div>
                  </div>
                </div>
  
  
              </Slider>
            </div>
          </>
          

          

        )

      }

      if(greenPlan.length === 0 && pinkPlan.length === 0) {
        return (null);
      }


      return (

        <>
          <div id="pack-1" className="col s12 m6 tab-content padding-40px-bottom" style={{ padding: "0px" }}>
          <Slider {...settings}>


            {
              greenPlan.map((value) =>

                <div className="col" key={value.id}>
                  <div className="packages green-box margin-10px-bottom border-radius padding-10px-tb padding-20px-lr">
                    <div className="row valign-wrapper">
                      <div className="col s9 m9 l10">
                        <h5 className="text-white margin-10px-bottom regular-font">
                          {value.title}
                        </h5>
                        <p className="sub-title">Data Package</p>
                      </div>
                      <div className="col s3 m3 l2">
                        <div className="center">
                          <span className="valid-date">
                            {("0" + value.duration).substr(-2)}<br />
                            <span className="unit">Day</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <div className="left">
                          <span className="data-valid">{value.dataLimit}GB</span>
                          <p>Highspeed Data</p>
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <div className="left">
                          <span className="data-valid text-black">{Lang.Currency(value.price)}</span>
                          <p className="text-black big-font">
                            Enjoy the lowest price in the market today
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <Link to={`/packages-detail/${value.id}/?box=green`} className="pack-btn">
                          View Plan
                        </Link>
                        <a href="#buy-modal" onClick={() => CreateBuyId(value.id)} className="pack-btn white modal-trigger" data-target="buy-modal">
                          Purchase
                        </a>

                      </div>
                    </div>
                  </div>
                </div>

              )
            }



          </Slider>
          
        </div>

        <div id="pack-2" className="col s12 m6 tab-content padding-40px-bottom" style={{ padding: "0px" }}>
            <Slider {...settings}>
            {
                pinkPlan.map((value) =>
  
                  <div className="col" key={value.id}>
                    <div className="packages pink-box margin-10px-bottom border-radius padding-10px-tb padding-20px-lr">
                      <div className="row valign-wrapper">
                        <div className="col s9 m9 l10">
                          <h5 className="text-white margin-10px-bottom regular-font">
                            {value.title}
                          </h5>
                          <p className="sub-title">Data Package</p>
                        </div>
                        <div className="col s3 m3 l2">
                          <div className="center">
                            <span className="valid-date">
                              {("0" + value.duration).substr(-2)}<br />
                              <span className="unit">Day</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row margin-10px-top">
                        <div className="col s12">
                          <div className="left">
                            <span className="data-valid">{value.dataLimit}GB</span>
                            <p>Highspeed Data</p>
                          </div>
                        </div>
                      </div>
                      <div className="row margin-10px-top">
                        <div className="col s12">
                          <div className="left">
                            <span className="data-valid text-black">{value.price} Ks</span>
                            <p className="text-black big-font">
                              Enjoy the lowest price in the market today
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row margin-10px-top">
                        <div className="col s12">
                          <Link to={`/packages-detail/${value.id}/?box=pink`} className="pack-btn">
                            View Plan
                          </Link>
                          <a href="#buy-modal" onClick={() => CreateBuyId(value.id)} className="pack-btn white modal-trigger" data-target="buy-modal">
                            Purchase
                          </a>
  
                        </div>
                      </div>
                    </div>
                  </div>
  
                )
              }
            </Slider>
            
          </div>
          <Modal buyId={buyId} />
 
        </>
        
      )
    }

    else if(TabActive == 1) {
      return (

        <>
          <div id="pack-1" className="col s12 m6 tab-content padding-40px-bottom" style={{ padding: "0px" }}>
          <Slider {...settings}>


            {
              greenPlan.map((value) =>

                <div className="col" key={value.id}>
                  <div className="packages green-box margin-10px-bottom border-radius padding-10px-tb padding-20px-lr">
                    <div className="row valign-wrapper">
                      <div className="col s9 m9 l10">
                        <h5 className="text-white margin-10px-bottom regular-font">
                          {value.title}
                        </h5>
                        <p className="sub-title">Data Package</p>
                      </div>
                      <div className="col s3 m3 l2">
                        <div className="center">
                          <span className="valid-date">
                            {("0" + value.duration).substr(-2)}<br />
                            <span className="unit">Day</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <div className="left">
                          <span className="data-valid">{value.dataLimit}GB</span>
                          <p>Highspeed Data</p>
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <div className="left">
                          <span className="data-valid text-black">{Lang.Currency(value.price)}</span>
                          <p className="text-black big-font">
                            Enjoy the lowest price in the market today
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row margin-10px-top">
                      <div className="col s12">
                        <Link to={`/packages-detail/${value.id}/?box=green`} className="pack-btn">
                          View Plan
                        </Link>
                        <a href="#buy-modal" onClick={() => CreateBuyId(value.id)} className="pack-btn white modal-trigger" data-target="buy-modal">
                          Purchase
                        </a>

                      </div>
                    </div>
                  </div>
                </div>

              )
            }



          </Slider>
          
        </div>
        <Modal buyId={buyId} />

        </>
        
      )
    }
    else if(TabActive == 2 ) {
      return (

        <>
        <div id="pack-2" className="col s12 m6 tab-content padding-40px-bottom" style={{ padding: "0px" }}>
            <Slider {...settings}>
            {
                pinkPlan.map((value) =>
  
                  <div className="col" key={value.id}>
                    <div className="packages pink-box margin-10px-bottom border-radius padding-10px-tb padding-20px-lr">
                      <div className="row valign-wrapper">
                        <div className="col s9 m9 l10">
                          <h5 className="text-white margin-10px-bottom regular-font">
                            {value.title}
                          </h5>
                          <p className="sub-title">Data Package</p>
                        </div>
                        <div className="col s3 m3 l2">
                          <div className="center">
                            <span className="valid-date">
                              {("0" + value.duration).substr(-2)}<br />
                              <span className="unit">Day</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row margin-10px-top">
                        <div className="col s12">
                          <div className="left">
                            <span className="data-valid">{value.dataLimit}GB</span>
                            <p>Highspeed Data</p>
                          </div>
                        </div>
                      </div>
                      <div className="row margin-10px-top">
                        <div className="col s12">
                          <div className="left">
                            <span className="data-valid text-black">{value.price} Ks</span>
                            <p className="text-black big-font">
                              Enjoy the lowest price in the market today
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row margin-10px-top">
                        <div className="col s12">
                          <Link to={`/packages-detail/${value.id}/?box=pink`} className="pack-btn">
                            View Plan
                          </Link>
                          <a href="#buy-modal" onClick={() => CreateBuyId(value.id)} className="pack-btn white modal-trigger" data-target="buy-modal">
                            Purchase
                          </a>
  
                        </div>
                      </div>
                    </div>
                  </div>
  
                )
              }
            </Slider>
            
          </div>
          <Modal buyId={buyId} />

        </>
        
      )
    }
    else {
      return (
        null
      )
    }
  }
  

  
  // const PackageTwo = () => {
  //   if (TabActive == 2 || TabActive == 0 ) {

  //     // if(pinkPlan.length > 0) {

  //       if (isLoading) {


  //         return (
  
  //           <div id="pack-2" className="col s12 m6 tab-content padding-40px-bottom" style={{ padding: "0px" }}>
  //             <Slider {...settings}>
  
  //               <div className="col">
  //                 <div className="packages green-box skeleton margin-10px-bottom border-radius padding-10px-tb padding-20px-lr">
  //                   <div className="row valign-wrapper">
  //                     <div className="col s9 m9 l10">
  //                       <h5 className="text-white margin-10px-bottom regular-font">
  //                         <Skeleton width={240} height={58} />
  //                       </h5>
  //                     </div>
  //                     <div className="col s3 m3 l2">
  //                       <div className="center">
  //                         <span className="valid-date">
  //                           <Skeleton width={59} height={48} />
  //                         </span>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="row margin-10px-top">
  //                     <div className="col s12">
  //                       <div className="left">
  //                         <Skeleton width={102} height={60} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="row margin-10px-top">
  //                     <div className="col s12">
  //                       <div className="left">
  //                         <Skeleton width={260} height={60} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="row margin-10px-top">
  //                     <div className="col s12">
  //                       <Skeleton width={450} height={52} />
  
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  
  
  //             </Slider>
  //           </div>
  
  //         )
        
  //       }

  //       if(pinkPlan.length === 0) {
  //         return (null);
  //       }
  
  //       return (
          
  //       );

  //     // } else {
  //     //   return null;
  //     // }

      
  //   }
  //   else {
  //     return null;
  //   }

  // }


  const PackageTab = () => {

    if(pinkPlan.length > 0 && greenPlan.length > 0) {
      return (
        <>
          <ul id="packages" className="tabs custom-tab-menu">
                  <li className="tab">
                    <a className={TabActive == 0 ? "active" : ""} onClick={e => setTabActive(0)} href="#all-pack">
                      All
                    </a>
                  </li>
                  <li className="tab">
                    <a href="#pack-1" className={TabActive == 1 ? "active" : ""} onClick={e => setTabActive(1)}>1 Gb</a>
                  </li>
                  <li className="tab">
                    <a href="#pack-2" className={TabActive == 2 ? "active" : ""} onClick={e => setTabActive(2)}>2 Gb</a>
                  </li>
                </ul>
        </>
      )
    } else if ( greenPlan.length > 0 )
    {
      return (
        <>
          <ul id="packages" className="tabs custom-tab-menu">
                  <li className="tab">
                    <a className={TabActive == 0 ? "active" : ""} onClick={e => setTabActive(0)} href="#all-pack">
                      All
                    </a>
                  </li>
                  <li className="tab">
                    <a href="#pack-1" className={TabActive == 1 ? "active" : ""} onClick={e => setTabActive(1)}>1 Gb</a>
                  </li>
                </ul>
        </>
      ) 
    }
    else if ( pinkPlan.length > 0 )
    {
      return (
        <>
          <ul id="packages" className="tabs custom-tab-menu">
                  <li className="tab">
                    <a className={TabActive == 0 ? "active" : ""} onClick={e => setTabActive(0)} href="#all-pack">
                      All
                    </a>
                  </li>
                  <li className="tab">
                    <a href="#pack-2" className={TabActive == 2 ? "active" : ""} onClick={e => setTabActive(1)}>2 Gb</a>
                  </li>
                </ul>
        </>
      ) 
    }
    
    else {
      return (
        <>
           <ul id="packages" className="tabs custom-tab-menu">
                  <li className="tab">
                    <a className={TabActive == 0 ? "active" : ""} onClick={e => setTabActive(0)} href="#all-pack">
                      All
                    </a>
                  </li>
                  <li className="tab">
                    <a href="#pack-1" className={TabActive == 1 ? "active" : ""} onClick={e => setTabActive(1)}>1 Gb</a>
                  </li>
                  <li className="tab">
                    <a href="#pack-2" className={TabActive == 2 ? "active" : ""} onClick={e => setTabActive(2)}>2 Gb</a>
                  </li>
                </ul>
        </>
      )
    }
   
  }



  return (
    <>
      <div className="inner-menu-box">
        <div className="container">
          <div className="row valign-wrapper">
            <Link to="/">
              <img
                src={backArrow}
                className="f-left margin-10px-lr back-arrow"
                alt=""
              />
            </Link>
            <div className="nav-title">
              <h5 className="title">Packages</h5>
            </div>
          </div>
          <div className="row margin-10px-top">
            <div className="col s12">
              <PackageTab/>
            </div>
          </div>
        </div>
      </div>
      <div className="container margin-20px-top">
        <div className="row">


          <PackageOne />
          {/* <PackageTwo /> */}

         
        </div>
      </div>

    </>

  );

}

export default Packages;