import React, { Component } from "react";
import M from "materialize-css";
import {Link } from 'react-router-dom';

// import "materialize-css/dist/css/materialize.min.css";
import services from "../services";
import Loading from "./Loading";


class Modal extends Component {

  constructor() {
    super();
    
  
//returns the tomorrow date
// console.log("tomorrow => ",tomorrow)
    this.state = {
      autoRenewel:false,
      isLoading:false,
      tommorowDate:0,
      ErrorMessage:""
    }
  }


  componentDidMount() {
    
    const options = {
      onOpenStart: () => {
        // console.log("Open Start");
        // console.log(this.props.buyId)
      },
      onOpenEnd: () => {
        // console.log("Open End");
      },
      onCloseStart: () => {
        // console.log("Close Start");
      },
      onCloseEnd: () => {
        // console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    // console.log(this.SuccessModal);
    M.Modal.init(this.Modal, options);
    M.Modal.init(this.SuccessModal, options);
    M.Modal.init(this.ErrorModal, options);

    // let instance = M.Modal.getInstance(this.SuccessModal);
   
    // instance.open();
    this.getTom();
    
   
    // instance.close();
    // instance.destroy();

  }

  getTom = () => {
    const today = new Date();
    let tomorrow =  new Date();
    tomorrow.setDate(today.getDate() + 1)
    let month = tomorrow.getMonth() + 1;
    let TomDate = tomorrow.getDate().toString().padStart(2, '0') +"/"+ month.toString().padStart(2, '0') + "/" + tomorrow.getFullYear();
    this.setState({tommorowDate: TomDate});
  }


  PurchasePlan = () =>{

    let instance = M.Modal.getInstance(this.SuccessModal);
    let instanceError = M.Modal.getInstance(this.ErrorModal);
    this.setState({
      isLoading: true
    });

    // instance.open();
      
    services.PurchasePlan(this.props.buyId,this.state.autoRenewel).then(
      (response) => {
        instance.open();
        this.setState({
          isLoading: false
        });
      }
    ).catch(
      (error) => {
        // console.log(error.response.data.message);
        this.setState({
          ErrorMessage:error.response.data.message
        })
        instanceError.open()
       
        this.setState({
          isLoading: false
        });
      }
    );

  }

  


  onValueChange = (event) => {
    this.setState({
      autoRenewel: event.target.checked
    });
  }

  render() {

    return (
      
      <div>
        <Loading status={this.state.isLoading}/>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="buy-modal"
          className="modal"
        >
          <div className="modal-content">
            <h6>Buy Pack!</h6>
            <p>Are you sure want to buy this Pack?</p>
            {/* <p>Auto Renewel</p>
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox" value={true} id="autoRenewel" onChange={this.onValueChange} />
                        <span className="lever"></span>
                        On
                </label>
                
            </div> */}
        </div>
        <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat">Cancel</a>
            <a href="#" id="finalPurChaseBtn" onClick={this.PurchasePlan} className="modal-close btn-flat">Buy</a>
        </div>
        </div>

        <div
          ref={Modal => {
            this.SuccessModal = Modal;
          }}
          id="success-modal"
          className="modal"
        >
            <div className="modal-content">
                <h6>Purchase Successful!</h6>
                <p>
                You have recharged for the day already. The pack expires on 8AM {this.state.tommorowDate}
                </p>
              
              </div>
          
            <div className="modal-footer">
                <Link to="/" className="modal-close btn-flat">OK</Link>
            </div>
        </div>

        <div
          ref={Modal => {
            this.ErrorModal = Modal;
          }}
          id="error-modal"
          className="modal"
        >
            <div className="modal-content">
                <h6>Error!</h6>
                <p>
                
                You already have an active pack, Please try after 6AM {this.state.tommorowDate}
                </p>
              
              </div>
          
            <div className="modal-footer">
                <a href="#" className="modal-close btn-flat">OK</a>
            </div>
        </div>

        
      </div>
    );
  }
}

export default Modal;
