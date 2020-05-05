# 就是一個傳入陣列抓出股票資訊的小套件

# install

```
npm install twse-stock-prices
```

# example

```js
var twseStockPrices = require('twse-stock-prices');

yahooStockPrices.getCurrentPrice(['1101','1815'], function(err, price){

	console.log(price);

});
```
會把json吐回去，然後就自己運用吧，基本上這個套件估計只有我自己在用