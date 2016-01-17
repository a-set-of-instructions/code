$(document).ready(function () {
  var bitcoinPrice = ("https://blockchain.info/q/24hrprice");
  $.getJSON(bitcoinPrice, function (cost){
    console.info('1 bitcoin = $',cost);
  });
});
