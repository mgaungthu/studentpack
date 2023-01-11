$(document).ready(function(){
           
    $("ul.custom-tab-menu li.tab").each(function(){

        if($(this).children("a").hasClass("active")){
            curtab = $(this).children("a").attr("href");
            if(curtab == "#all-pack") {
                $("div.tab-content").show();
                
            }
            else {
                showSelectedTab(curtab);
            }
            $('div.carousel.carousel-slider').carousel({
                fullWidth: true,
                indicators: true,
                padding:25,
                noWrap:true,
            });
            
        }
    });

    $("ul.custom-tab-menu li.tab a").click(function(e){
        e.preventDefault();
        var curtab = $(this).attr("href");
         $("ul.custom-tab-menu li.tab a").removeClass("active");
         $(this).addClass("active");   
        
         if(curtab == "#all-pack") {
                $("div.tab-content").show();
            }
            else {
                showSelectedTab(curtab);
            }

    });

    showSelectedTab = (curtab) => {

        $("div.tab-content").each(function(){
                   var tabId = "#"+$(this).attr("id");
                //    var curtab = curtab.replace('#', '');
                //    alert(tabId+' '+curtab);
                   if(tabId === curtab) {
                    $(this).show();
                   }else {
                    $(this).hide();
                   }
         })
         
    }



  });