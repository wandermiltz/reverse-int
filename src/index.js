module.exports = function reverse(n) {

	const str = n.toString()
	let strReversed

	if (str[0] === '-') {
		strReversed = str.substring(1).split("").reverse().join("");
	} else {
		strReversed = str.split("").reverse().join("");
	}
	return Number(strReversed)
}
