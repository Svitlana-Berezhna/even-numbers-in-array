const evenNumbersInArray = (array) => {
	if (!Array.isArray(array) || !array.length)
		return "Passed argument is not an array or empty";
	let resultArray = array.filter(number => number % 2 == 0);
	return (resultArray.length) ? resultArray : "Passed array does not contain even numbers";
};

module.exports = evenNumbersInArray;

