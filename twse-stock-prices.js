const request = require('request');

const baseUrl = 'http://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=';

module.exports.getCurrentPrice = function (stocks, callback) {

	var query = ''
	stocks.forEach(stock => query = query + 'tse_' + stock + '.tw|');
	query = query.substring(0, query.lastIndexOf('|'));
	query = query + '&json=1&delay=0&_=' + Date.now();;
	// console.log(baseUrl + query);

	request(baseUrl + query, function (err, res, body) {
		if (err) { callback(err); }
		try {
			callback(null, JSON.parse(body));
		} catch (err) {
			callback(err)
		}
	});
};
