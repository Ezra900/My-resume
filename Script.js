$(document).ready(function(){

    $().scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("navbar");

        }else{
            $('.navbar').removeClass("navbar");
        }
      
    })

}); 