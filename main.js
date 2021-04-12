

$(document).ready(function(){
    $(".read").click(function(){
       $(this).prev().toggle();
       $(this).siblings('.dots').toggle();
       if($(this).text()=='Continue reading'){   
     $(this).text('Read less');
       }
       else{
     $(this).text('Continue reading');
       }
    });
 });

 


 $(document).ready(function(){
    $(".readone").click(function(){
       $(".moreone").prev().toggle();
       $(this).siblings('.dotsone').toggle();
       if($(this).text()=='Continue reading'){ 
     $(this).text('Read less');
     $(".moreone").show();
       }
       else{
     $(this).text('Continue reading');
     $(".moreone").toggle();
       }
    });
 });



/*
var i=0;
function read() {
    if(!i) {
        document.getElementById("more").style.display ="inline";
        document.getElementById("dots").style.display ="none";
        document.getElementById("read").innerHTML ="Read less";
        i=1;
    }
    else {
        document.getElementById("more").style.display ="none";
        document.getElementById("dots").style.display ="inline";
        document.getElementById("read").innerHTML ="Continue reading";
        i=0;
    }
}
*/


/*
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");}

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Continue reading";
        moreText.style.dispaly = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }

    */