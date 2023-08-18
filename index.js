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
			break;  // V
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



/* 

Line 22 may seem redundant but it's the opposite, on certain edge cases,
it prevents one or two extra, redundant question from being
prompted to the user when the number can already be guessed.
e.g, in a range of 1 to 100, pick the number 5 and compare
with and without line 22

The ` break; ` on line 17 is for visualization because it prevents
line 23, which is also for visualization, from running when the number has been guessed,
and thus, avoids an extra, duplicate line in the "report" table in console.
*/