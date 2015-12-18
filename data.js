$(document).ready(function (btc) {
  var bitcoinPrice = "https://blockchain.info/ticker?jsoncallback=?";
  $.getJSON(bitcoinPrice, function (cost){
    var usDollarPrice = cost.USD[15m];
    console.log('usd : ', usDollarPrice);
  });
});
