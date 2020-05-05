var twseStockPrices = require('../twse-stock-prices');

twseStockPrices.getCurrentPrice(['1101'], function(err, price){
	console.log(price);
});