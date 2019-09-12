//Variable declaration
var cards = document.querySelectorAll('.flip-card');

let firstClick = false;
let lockGame = false;
let firstCard, secondCard;

//function assignments
function flipCard () {
  if (lockGame) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!firstClick){
    firstClick = true;
    firstCard = this;
  } else {
    firstClick = false;
    secondCard = this;
    matchCheck();
  }
}
function matchCheck (){
  if (firstCard.dataset.card === secondCard.dataset.card) {
    blockCards();
    resetGame ();
  } else {
    resetCards();
  }
}
function blockCards (){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}
function resetCards(){
  lockGame = true;
  setTimeout (()=>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetGame();
  }, 1500);
}
function resetGame(){
  [firstClick, lockGame] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function Shuffle(){
  cards.forEach(card => {
    let randomOrder = Math.floor(Math.random()*12);
    card.style.order = randomOrder;
  });
})();

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click",flipCard);
}
cards = document.querySelectorAll('.flip-card-inner div:nth-child(2)')
console.log(cards);

cards.forEach(function(card){
   var tagName = card.firstElementChild.tagName;
   console.log('the parent node is ' + card.parentNode.firstElementChild.className);
   if (tagName=='H1'){
    card.parentNode.classList.add('name');
    console.log('It is an h1');
  } else if (tagName=='IMG') {
    card.parentNode.classList.add('image')
    console.log('It is an image');
  }
   // console.log('next');
})
