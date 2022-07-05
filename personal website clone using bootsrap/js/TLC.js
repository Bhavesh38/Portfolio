

document.querySelector("button").addEventListener("click", function () {
    let num = Math.random() * 100;
    num = Math.floor(num) + 1;

    if (num <= 50) {
        num = 50+num;
    }
    document.querySelector(".result").innerHTML="The Love percentage beween You and your dream person is:"+num+" %."; 
});
