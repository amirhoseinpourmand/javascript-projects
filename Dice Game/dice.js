var randNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImg1 = `./images/dice` + randNumber1 + `.png`;

var firstImg = document.body.querySelector(".img1");

firstImg.setAttribute(`src` , randomDiceImg1);



var randNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImg2 = `./images/dice` + randNumber2 + `.png`;

var secondImg = document.body.querySelector(".img2");

secondImg.setAttribute(`src` , randomDiceImg2);



if(randNumber1 > randNumber2){
    document.body.querySelector("h1").innerHTML = `Player 1 Wins!`;
}
else if(randNumber2 > randNumber1){
    document.body.querySelector("h1").innerHTML = `Player 2 Wins!`;
}
else{
    document.body.querySelector("h1").innerHTML = `Draw`;
}