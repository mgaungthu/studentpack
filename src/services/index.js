import axios from "axios";



const BASE_URL = process.env.NODE_ENV==="development" ? process.env.REACT_APP_DEV_BASE_URL : process.env.REACT_APP_PROD_BASE_URL; 


var queryVal = getUrlVars();
const token = decodeURIComponent(queryVal['token']);
const lang = queryVal["language"];
if(token!='undefined'){
  var access_token = "Bearer "+ token;
  localStorage.setItem("token", access_token);
  localStorage.setItem("lang", lang);
}
else if(localStorage.getItem("token")) {
  var access_token = localStorage.getItem("token");
} else {
  alert('Error happening token expired');
}

// console.log(access_token);
const config = {
    headers: {
      "Accept": "*/*",
      'Authorization': access_token,
      'Access-Control-Allow-Origin': '*'
    }
};



function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

const getCurrentPlan = async () => {
    try {
      var response = await axios.get(`${BASE_URL}/account/status`, config);

      var response = response.data;

      return response;
    } catch (errors) {
      console.error(errors);
    }
  };

  const getAllPlan = async () => {
    try {
      var response = await axios.get(`${BASE_URL}/shop/plans`, config);
  
      var response = response.data;
  
      return response;
    } catch (errors) {
      console.error(errors);
    }
  };
  
  
  const PurchasePlan = async (id,autoRenewel) => {
    const buyData =  {"id":id,"AutoRenew": autoRenewel};
    var response = await axios.post(`${BASE_URL}/shop/purchase`,buyData, config);

    var response = response.data;

    return response;
  }

  const getPlanDetail = async (paramId) => {
    try {
      var response = await axios.get(`${BASE_URL}/shop/plans/${paramId}`, config);
  
      var response = response.data;
  
      return response;
    } catch (errors) {
      console.error(errors);
    }
  };




export default {
    getCurrentPlan,
    getAllPlan,
    PurchasePlan,
    getPlanDetail
}
