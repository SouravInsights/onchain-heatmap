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

export const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomInt: number = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomInt;
};

export const getRandomCount = (squares: number) => {
	const randomCount: number[] = [];
	for (let i = 0; i < squares; i++) {
		randomCount.push(getRandomInt(0, 25));
	}
	return randomCount;
};

export const transformCount = (count: number) => {
	if (count == 0) {
		return 0;
	} else if (count <= 10 && count !== 0) {
		return 1;
	} else if (count > 10 && count <= 15) {
		return 2;
	} else if (count > 15 && count <= 20) {
		return 3;
	} else {
		return 4;
	}
};

export const transformPixelsToNumber = (pixel: string) => {
	const exp = /-?\d+/g;
	return parseInt(exp.exec(pixel.toString())[0]);
};

// new utils.js

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
