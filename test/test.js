var twseStockPrices = require('../twse-stock-prices');

twseStockPrices.getCurrentPrice(['3029', '2408', '8437', '1256', '8462'], function(err, price){
	console.log(price);
});