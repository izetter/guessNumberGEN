// the lines with a " V " comment indicate visualization/report code to console,
// those lines can be commented out with no issue
function guessNumber(min, max) {
	alert(`piensa en un número del ${min} al ${max}`);
	let guess = Math.floor((max - min) / 2);
	let currentMin = min;
	let currentMax = max;
	let keepGuessing = true;
	const results = [];	// V
	results.push({guess, currentMin, currentMax});	// V
	while (keepGuessing) {
		if (confirm(`¿Tu número es mayor que ${guess}?`)) {
			currentMin = guess + 1;
			guess = Math.floor((currentMax - currentMin) / 2 + currentMin);
		} else if (confirm(`¿Tu número es ${guess}?`)) {
			keepGuessing = false;
			break;
		} else {
			currentMax = guess - 1;
			guess = Math.floor((currentMax - currentMin) / 2 + currentMin);
		}
		if (currentMin === currentMax) keepGuessing = false;
		results.push({guess, currentMin, currentMax});	// V
	}
	console.table(results);	// V
	alert(`Tu número es ${guess}, excelente decisión.`)
	return guess;
}
