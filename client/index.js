'use strict';
$(document).ready(init);


var inputNums = [];

function init(){
$('#getrandom').click(getValue);
}

function getValue(){
var inputString = $('#number').val();
var inputInt = parseInt(inputString);
inputNums.push(inputInt);


  var $div = $('<div>');
  $div.text(inputInt);
  $('.container').append($div);
  

if (inputString === '+'){
  var total = inputNums.reduce(function(a,b){
    return a + b;
  });
  console.log(total);
}

  console.log(inputInt);
//}



}

























//
// console.log(text)
// var words = text.match(/\w+/gi);
//
// // var on_count = 0;
// var counts = {};
//
// words.forEach(function(word){
//   counts[word] = counts[word] || 0;
//   counts[word]++;
//   }
//   return word;
// });
// console.log('Word count: ', counts);

// function toCamerlCase(string){
//   var newArray = string.split('-');
//   newArray.forEach(function(word, index){
//     if(index === 0){
//       results.push(word.toLowerCase());
//     }else{
//       var temp = word.toLowerCase();
//       var tempResult = '';
//       for(i = 0; i < word.length; i++){
//         if(i === 0){
//           tempResult = tempResult.concat(word[i].toUpperCase());
//         }
//         else{
//           tempResult = tempResult.concat(word[i]).toLowerCase();
//         }
//       }
//     }
//   }
//  return results.join(',');
// }
// console.log(toCamerlCase('coding-house'));


























//
// $(document).ready(init);
//
// function init(){
//   $('#getrandom').click(getRandom);
// }
//
// function getRandom(){
//   var number = $('#number').val();
//   $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=' + number + '&type=uint8', function(response){
//     console.log(response.data);
//     displayRoots(response.data);
//     var sum = [];
//     for ( var i = 0; i < (response.data).length; i++ ){
//       sum += response.data[i];
//     }
//     console.log(sum);
//   });
// }
// function displayRoots(numbers){
//   var roots = numbers.map(function(n){
//     return Math.sqrt(n);
//   });
//
// var divs = roots.map(function(r, i){
//   var $div = $('<div>');
//   $div.addClass('root');
//
//
//   var $div1 = $('<div>');
//   $div.addClass('root');
//
//
//   var $div2 = $('<div>');
//   $div1.text(numbers[i]);
//   var color = numbers[i]%2 ? 'green' : 'red';
//   $div1.css('background-color', color);
//
//   var $div2 = $('<div>');
//   $div2.text(r);
//   color = parseInt(r)%2 ? 'blue' : 'yellow';
//   $div2.css('background-color', color);
//
//   $div.append($div1, $div2);
//
//
//
//   return $div;
//
// });
//
//   var max = Math.max.apply(Math, numbers);
//   var $max = $('<div>');
//   $max.text('Max equals: ' + max);
//   $('#roots').append(divs, $max);
//
//   var min = Math.min.apply(Math, numbers);
//   var $min = $('<div>');
//   $min.text('Min equals: ' + min);
//   $('#roots').append(divs, $min);
//
// }
