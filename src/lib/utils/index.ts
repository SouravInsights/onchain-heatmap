export function getWeekNumber(date: Date): number {
	const onejan = new Date(date.getFullYear(), 0, 1);
	const weekNum = Math.ceil(
		((date.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
	);
	return weekNum;
}

export function getDayOfWeek(date: Date): number {
	return date.getDay();
}
