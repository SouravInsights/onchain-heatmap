// src/lib/utils.ts
export function generateDates(year: number): Date[][] {
	const startDate = new Date(year, 0, 1); // January 1st
	const endDate = new Date(year, 11, 31); // December 31st
	const months: Date[][] = [];

	const currentDate = new Date(startDate);
	while (currentDate <= endDate) {
		const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
		const datesInMonth: Date[] = [];
		while (currentDate <= endOfMonth) {
			datesInMonth.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}
		months.push(datesInMonth);
	}

	return months;
}
