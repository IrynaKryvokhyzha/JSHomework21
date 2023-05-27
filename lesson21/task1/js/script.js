function onDivClick(event) {
	if(event.target.tagName === 'DIV'){
		let div = event.target
		while (div.nextElementSibling) {
			div = div.nextElementSibling
			div.style.backgroundColor = 'red'
		}
	}
}
document.querySelector('#hello_container').onclick = onDivClick