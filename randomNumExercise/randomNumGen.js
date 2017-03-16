function randomNumber() {
  var date = new Date();
  var randomNumber = (+date) + (date.getSeconds());
  console.log(randomNumber.toString().substring(randomNumber.toString().length -4));
}

randomNumber()