let num1=Math.random()*6;
num1=Math.floor(num1)+1;
let num2=Math.random()*6;
num2=Math.floor(num2)+1;

let src1="diceGameImages/dice"+num1+".png";
let src2="diceGameImages/dice"+num2+".png";
document.getElementById("p1").setAttribute("src",src1);
document.getElementById("p2").setAttribute("src",src2);

if(num1>num2)
{
    document.querySelector(".container h1").innerHTML="🚩 Player 1 win!";
}
else if(num1<num2)
{
    document.querySelector(".container h1").innerHTML="Player 2 win! 🚩";
}
else
{
    document.querySelector(".container h1").innerHTML="🚩 Draw! 🚩";
}




