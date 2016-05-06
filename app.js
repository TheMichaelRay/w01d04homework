// var scores = [
//   1204300,
//   1203040,
//   1010230,
//   1000410,
//   903193
// ]

var scoreList = document.querySelector('#highscores');
var scoreNumberList = document.querySelector('#scoreNumbers');
// *******for loop works********
// for (var i=0; i<scores.length; i++){
//   console.log(scores[i]);
//   scoreList.innerHTML += '<li>' + scores[i] + '</li>';
// *******while loop works*******
// var i = 0;
// while (i<scores.length) {
//   console.log(scores[i]);
//   scoreList.innerHTML += '<li>' + scores[i] + '</li>';
//   i++;
// }
//
// forEach loop works
// scores.forEach(function(el){
//   scoreList.innerHTML += '<li>' + el + '</li>';
// }
// )

var playerScores = {
  RAY: 1009200,
  MOG: 1030010,
  LAW: 1040010,
  ASS: 1200990,
  POG: 996030
}

for (key in playerScores) {
  scoreList.innerHTML += '<li class="names">' + key + '</li>';
  scoreNumberList.innerHTML += '<li class="scores">' + playerScores[key] + '</li>';

}
