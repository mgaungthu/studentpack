import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import backArrow from "../commons/back-arrow.png";
import Modal from "../commons/Modal";
import services from "../services";
import Lang from "../commons/Lang";

const PackagesDetail = () => {

  const { id } = useParams();
  const search = useLocation().search;
  const box = new URLSearchParams(search).get('box');
  const [buyId, setbuyId] = useState(0);
  const [Detail, setDetail] = useState({
    title: "Student Pack",
    price: 0,
    valid: 1,
    data: 1,
    desc:""
  });
  const [isLoading, setisLoading] = useState(true);


  useEffect(() => {

    services.getPlanDetail(id).then(
      (response) => {
        // console.log(response);
        setDetail({
          title: response.title,
          price: response.price,
          valid: response.duration,
          data: response.dataLimit,
          desc:response.description
        })
        setisLoading(false);
      }).catch(
        (err) => {
          console.log(err);
        }
      );

  }, [])

  const CardControl = () => {
    if (isLoading) {
      return (

        <div className="green-box skeleton full-view border-radius padding-10px-tb padding-20px-lr">
          <div className="row valign-wrapper">
            <div className="col s9 l11">
              <h5 className="text-white margin-10px-bottom regular-font">
                <Skeleton width={240} height={52} />
              </h5>
            </div>
            <div className="col s3 l1">
              <div className="center">
                <span className="valid-date">
                  <Skeleton width={39} height={48} />
                </span>
              </div>
            </div>
          </div>
          <div className="row margin-10px-top">
            <div className="col s12">
              <div className="left">
                <Skeleton width={102} height={55} />
              </div>
            </div>
          </div>
          <div className="row margin-10px-top">
            <div className="col s12">
              <div className="left">
                <Skeleton width={266} height={61} />
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={`packages ${box == 'pink' ? 'pink-box' : 'green-box'} full-view border-radius padding-10px-tb padding-20px-lr`}>
          <div className="row valign-wrapper">
            <div className="col s9 l11">
              <h5 className="text-white margin-10px-bottom regular-font">
                {Detail.title}
              </h5>
              <p className="sub-title">Data Package</p>
            </div>
            <div className="col s3 l1">
              <div className="center">
                <span className="valid-date">
                  {("0" + Detail.valid).substr(-2)}<br />
                  <span className="unit">Day</span>
                </span>
              </div>
            </div>
          </div>
          <div className="row margin-10px-top">
            <div className="col s12">
              <div className="left">
                <span className="data-valid">{Detail.data}GB</span>
                <p>Highspeed Data</p>
              </div>
            </div>
          </div>
          <div className="row margin-10px-top">
            <div className="col s12">
              <div className="left">
                <span className="data-valid text-black">
                  {Lang.Currency(Detail.price)}{" "}
                  {Detail.price === 600 || Detail.price === 300 ? <span class="suggest-price border-small-radius">Suggest Price</span> : ""}
                </span>
                <p className="text-black big-font">
                  Enjoy the lowest price in the market today
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const ButtonControl = () => {
    if (isLoading) {
      return (
        <div className="mobile-menu border-top border-top-radius">
          <div className="container padding-10px-tb">
            <div className="row">
              <div className="col s6 border-right">
                <div className="d-flex flex-column">
                  <Skeleton width={144} height={52} />
                </div>
              </div>
              <div className="col s6">
                <div className="d-flex flex-column">
                  <Skeleton width={144} height={52} />
                </div>
              </div>
            </div>
          </div>
          <div className="">

            <Skeleton width={485} height={52} />

          </div>
        </div>
      )
    } else {
      return (
        <div className="mobile-menu border-top border-top-radius">
          <div className="container padding-10px-tb">
            <div className="row">
              <div className="col s6 border-right">
                <div className="d-flex flex-column">
                  <p className="infodata">Data</p>
                  <span className="infounit">{Detail.data} GB</span>
                </div>
              </div>
              <div className="col s6">
                <div className="d-flex flex-column">
                  <p className="infodata">Validity</p>
                  <span className="infounit">{Detail.valid} Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">

            <a href="#purchageModal" onClick={() => setbuyId(id)} data-target="buy-modal" className="btn purchase-btn modal-trigger">
              Purchase for {Detail.price} Ks
            </a>
          </div>
        </div>
      )
    }
  }



  return (
    <>
      <div className="detail-view">
        <div className="inner-menu-box">
          <div className="">
            <div className="row valign-wrapper">
              <Link to="/data-packages">
                <img
                  src={backArrow}
                  className="f-left margin-10px-lr back-arrow"
                  alt=""
                />
              </Link>
              <div className="nav-title">
                <h5 className="title">Student pack</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row">
            <div className="col s12">

              <CardControl />

            </div>
          </div>
        </div>
        <div className="padding-100px-bottom">
          <div className="row padding-30px-bottom">
            <div className="col s12">
              <h5 className="text-gray font-regular detail-info-title">
                INFORMATION
              </h5>
            </div>
            <div className="col s12">
              <div className="card border-radius padding-10px-tb padding-20px-lr">
                <p className="regular-font bold">Student plus sim info</p>
                <p className="regular-font bold">
                  The student shall buy 1GB high-speed data, the validity is one day till 8 am.
                  <br />
                  <br />
                 If the data is exhausted, students shall still enjoy data at the speed of 512 kbps.
                  <br />
                  <br />
                  Students can recharge from 6 am and get the benefit from 8 am to 8 am the next day.
                  <br />
                  <br />
                  1-hour service grace period: Even though the package expired at 8 am, Ananda stops the service at 9 am (including one hour grace period) so the customers can recharge before 9 AM and enjoy the continuous service. 
                  
                  {/* {Detail.desc} */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <ButtonControl />
        </div>
      </div>
      <Modal buyId={buyId} />

    </>
  );
}


export default PackagesDetail;