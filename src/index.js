module.exports = function toReadable (number) {
  return convert(number).trim();
}
let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
function convert(number) {
  if(number == 0) {
      return "zero";
  } else {
      return convertToHundreds(number);
  }
}

function convertToHundreds(number) {
  if(number >= 100) {
      return ones[Math.floor(number/100)] + " hundred " + convertToTens(number % 100);
  } else{
      return convertToTens(number);
  }
}

function convertToTens(number) {
  if(number >= 20) {
      return tens[Math.floor(number / 10)] + " " + ones[number % 10];
  } else if(number >=10 && number <=19){
     return teens[number-10];
  }
  else {
      return ones[number];
  }
}