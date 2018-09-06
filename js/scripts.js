
$(document).ready(function(){

    /* mahdollistaa sulku ja avaus napin piilotuksen painalluksella, fa-times oletuksena piilossa*/
    $(".hamburger-btn .fa-times").hide();

    /*klikkaa fa-bars kohtaa, se piiloutuu ja times tulee esiin. Mob active luokka aktivoituu(menu aukeaa). Alhaalla toistenpain*/
    $(".hamburger-btn .fa-bars").click(function(){
         $(this).hide();
         $(".hamburger-btn .fa-times").show();
         $(".mob ul").addClass("active"); 
                      
    });
    $(".hamburger-btn .fa-times").click(function(){
         $(this).hide();
         $(".hamburger-btn .fa-bars").show();
         $(".mob ul").removeClass("active");
    });

});
