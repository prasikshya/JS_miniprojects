const myButton=document.getElementById("myBtn");
const myImg=document.getElementById("myImg");
const paragraph=document.getElementById("myPara");

myButton.addEventListener("click",event=>{

    if(myImg.style.visibility==="hidden"){//if none was used it wouln't have reserved space for image
        //and button would've shifted...
        myImg.style.visibility="visible";
        myButton.textContent="Hide"
    }
    else{
        myImg.style.visibility="hidden";
        myButton.textContent="Show";
    }
    
});