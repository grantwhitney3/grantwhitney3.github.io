const reviews = [
    {
    reviewerName: "Mike Jefferson",
    img:"https://waketechedu.sharepoint.com/:i:/r/sites/Section_261810/Shared%20Documents/General/JavaScript/Project%20Files/pexels-bruno-salvadori-2269872.jpg?csf=1&web=1&e=mhQ3xt",
    reviewText:"Oh, man! When I first heard about Fluffernutter Whizbang! from www.FunkyFluffernutterWhizbang.com, I thought it was a joke. But just one week in and my life is already on a new trajectory. I can't believe how much joy this product brings me every day. Can't recommend it enough!", 
    reviewRating:5
    },

    {
        reviewerName: "Sarah Thompson",
        img:"https://waketechedu.sharepoint.com/:i:/r/sites/Section_261810/Shared%20Documents/General/JavaScript/Project%20Files/pexels-anna-nekrashevich-6801642.jpg?csf=1&web=1&e=556dLJ",
        reviewText:"Only three days and I'm sold! At first, I chuckled at the name - Fluffernutter Whizbang? But the results? Absolutely no joke. My mornings have been transformed. Thank you, www.FunkyFluffernutterWhizbang.com for this little miracle!", 
        reviewRating:3
    },
    {
        reviewerName: "Jake Miller",
        img:"https://waketechedu.sharepoint.com/:i:/r/sites/Section_261810/Shared%20Documents/General/JavaScript/Project%20Files/pexels-kelvin-fran%C3%A7a-3242038.jpg?csf=1&web=1&e=h42hXQ",
        reviewText:"It's been two months with my Fluffernutter Whizbang, and honestly, I can't remember life before it. It's that essential. The name might sound silly, but the benefits are profoundly serious. www.FunkyFluffernutterWhizbang.com, you've got a lifelong customer!", 
        reviewRating:4
    }
];

var currentIndex = 0;

function loadReview(index) {

    revPic = document.getElementById("reviewerPic"); 
    revPic.src = reviews[index].img;
    //alert(reviews[index].img);

    revName = document.getElementById("reviewerName"); 
    revName.innerHTML = reviews[index].reviewerName;
    //revName = "First Last";

    revText = document.getElementById("reviewText"); 
    revText.innerHTML = reviews[index].reviewText;

    revRating = document.getElementById("reviewRating"); 
    revRating.innerHTML = starFunc(parseInt(reviews[index].reviewRating));

    revIndex = document.getElementById("reviewIndex");
    revIndex.innerHTML = "Array index: " + index;

}

function nextFunc() {
    currentIndex++;
    if (currentIndex > reviews.length - 1) {
        currentIndex = 0;
    }

    loadReview(currentIndex);

}

function prevFunc() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    }

    loadReview(currentIndex);
}

function randFunc(){
    let randIndex = Math.floor(Math.random() * (reviews.length));
    loadReview(randIndex);
}

function starFunc(numStars){
    let starString = '';
   for (i=0; i < numStars; i++) {
        starString += '<img class="star" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png">';
    }
    return starString;
}

