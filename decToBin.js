const { questionInt } = require("readline-sync");
let binString = "";
let userBinaryInput = questionInt("Enter a numerical int: ");

function decToBin(decimalValueToConvert) {
	while(decimalValueToConvert > 0) {
		binString += `${decimalValueToConvert % 2}`;
		decimalValueToConvert = Math.floor(decimalValueToConvert / 2); // to get quotient we need to math.floor
		console.log(`Quotient: ${decimalValueToConvert}`);
	}
	console.log (`Final Binary Value: ${binString}`);
}

decToBin(userBinaryInput);