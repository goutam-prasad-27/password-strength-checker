let password = document.querySelector(".pass");
let strength = document.querySelector(".strength-score");

password.oninput = () => {
	let point = 0;
	let value = password.value;

	let widthStrength = ["1%", "25%", "50%", "75%", "100%"];   //* PROGRESSBAR WIDTH %
	let strengthBar = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#30CEC7"];   //* PROGRESSBAR COLOR #

	if (value.length >= 6) {
		let arrTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; //* CHARACTERS USED AS PASSWORD
		arrTest.forEach((item) => {
			if (item.test(value)) {
				point += 1;
			}
		});
	}
	strength.style.width = widthStrength[point];  //* PROGRESSBAR WIDTH UPDATE %
	strength.style.backgroundColor = strengthBar[point];  //* PROGRESSBAR COLOR UPDATE #
};
