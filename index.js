var a= (Math.floor(Math.random()*6))+1;
var image1= "./images/dice"+a+".png" ;
document.querySelector(".img1").setAttribute("src", image1);


var b= (Math.floor(Math.random()*6))+1;
var image2= "./images/dice"+b+".png" ;
document.querySelector(".img2").setAttribute("src", image2);

if(a>b){
    document.querySelector("h1").innerHTML="Player 1 wins🎉"
}

else if(b>a)
{
    document.querySelector("h1").innerHTML="Player 2 wins🎉"
}

else
    {
        document.querySelector("h1").innerHTML="Draw😲"
    }
