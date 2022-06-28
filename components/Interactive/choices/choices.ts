export const choicesPage2 = [
	'หนาปิดมิดจนฉันหา ทางออกไม่ได้',
	'จางๆพอมีแสงรำไรให้เห็นอยู่บ้าง',
];

export const choicesPage6 = [
	'สีเหลืองแห่งความสุข (joy)',
	'สีม่วงน่าประหลาดใจ (surprise)',
	'สีฟ้าดูเศร้าซึม (sadness)',
	'สีแดงแห่งความโกรธ (anger)',
	'สีส้มปนความกลัว (fear)',
	'สีเขียวน่าขยะแขยง (disgust)',
];

export const choicesPage6ToColor = [
	'yellow_loop',
	'purple_loop',
	'blue_loop',
	'red_loop',
	'orange_loop',
	'green_loop',
];

export const choicesPage7 = [
	'ทั่วร่างกายของฉัน',
	'บนหัวของฉัน',
	'ตรงหัวใจของฉัน',
	'ปลายมือและเท้า',
];

export const choicesPage31 = [
	'ภาพวาดหลากหลาย',
	'รูปปั้นจากหลายอารมณ์',
	'กลุ่มคนเต้นพร้อมเสียงเพลง',
	'บทกวีที่สวยงาม',
];

export function getUserChoice(page: number) {
	const userChoice = window.localStorage.getItem(`userChoicePage${page}`);
	return Number(userChoice);
}
