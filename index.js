// The commented out code inside the function is just for visualization
// of results/iteratios if you want to see them.
function guessNumber(min, max) {
	let guess = Math.floor((max - min) / 2);
	let currentMin = min;
	let currentMax = max;
	let keepGuessing = true;
	const results = [];
	results.push({guess, currentMin, currentMax});
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
		results.push({guess, currentMin, currentMax});
	}
	console.table(results);
	console.log(`guess: ${guess}, actual: ${42}`);
	alert(`Tu número es ${guess}, excelente decisión.`)
	return guess;
}


alert('piensa en un número del 1 al 100');
guessNumber(1, 100);
