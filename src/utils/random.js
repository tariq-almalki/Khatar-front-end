export function randomGender(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function randomDate(startDate, endDate) {
	const minValue = startDate.getTime();
	const maxValue = endDate.getTime();
	const timestamp = Math.floor(Math.random() * (maxValue - minValue) + minValue);
	return new Date(timestamp);
}
