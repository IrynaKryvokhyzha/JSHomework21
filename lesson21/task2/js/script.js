function onInpChange(event) {
	let input = event.target
	let num = parseInt(input.value)
	const copyInput = input
	while (input.nextElementSibling) {
		input = input.nextElementSibling
		input.value = ++num
	}
		while (input.previousElementSibling) {
		input = input.previousElementSibling
		input.value = --num
	}
}
document.querySelector('#container').oninput = onInpChange