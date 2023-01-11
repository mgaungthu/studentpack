const lang = localStorage.getItem("lang");

const Currency = (val) => {

    if(lang == "en") {
        val = formatMoney(val) + " Ks";
    }else {
        val = formatMoney(val) + " ကျပ်";
    }

    return val;
    
}



function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
  


export default {
    Currency,
}