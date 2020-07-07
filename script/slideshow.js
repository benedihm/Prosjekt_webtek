var i = 0;
var images = [];
var time = 5000; 
 
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3"); 

let dots = [dot1, dot2, dot3]

// bildeliste

images[0]="img/mexico.jpg";
images[1]="img/mexico2.jpg";
images[2]="img/mexico3.jpg";


function changeImage(){
    
     for (b = 0; b < dots.length; b++) { 
          
            dotChangeWhite(b);
    
          }
    
    document.getElementById("side1").src = images[i];
    
    dotChangeRed(i);
    
  
    
    
    if (i< images.length - 1){
        
        i++;
    }
    
    else{
        
        i=0;
        
        
         }
   
   setTimeout("changeImage()",time);

    
}

window.onload = changeImage;


function dotChangeRed(a) {
    
     dots[a].style.backgroundColor = "#79C1CE";

}

function dotChangeWhite(a) {
    
     dots[a].style.backgroundColor = "#D3D3D3";

}