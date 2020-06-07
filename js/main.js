 $(function(){
    $(".hamburger").on("click",function(){
        

        if($(".hamburger").hasClass("open")){
            $(".hamburger").removeClass("open");
            $(".hamburger").addClass("close");
            $(".navList").css("display","block");

        }else{
            $(".hamburger").removeClass("close");
            $(".hamburger").addClass("open"); 
            $(".navList").css("display","none");
        }
    });
}); 

