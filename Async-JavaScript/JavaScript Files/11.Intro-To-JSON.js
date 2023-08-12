const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`
//we can't initially search this JSON data as it's in the form of a string

const parsedData = JSON.parse(data); //using JSON.parse will convert the string into an object

const price = parsedData.ticker.price; //we can then search the object and extract the specific data we need

const stringifiedData = JSON.stringify(parsedData); //we can also convert this back into valid JSON using JSON.stringify