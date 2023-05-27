class List{
	getRandNum(minNum, maxNum){
		return minNum+Math.floor(Math.random()*(maxNum-minNum+1))
	}
	getRandomArr(){
		const ol = document.createElement('ol')
		for (let i = 0; i < this.getRandNum(1, 10); i++) {
			const li = document.createElement('li')
			li.innerText = this.getRandNum(1,100)
			ol.append(li)
		}
		return ol
	}
	onButtonClick(event){
		if(event.target.tagName === 'BUTTON'){
			const ol = document.querySelectorAll('ol')
			for (let i = 0; i < ol.length; i++) {
				if(ol[i].children.length %2 === 0){
				ol[i].style.color = 'red'
				}
				else 
				ol[i].style.color = 'green'
			}
		}
	}
	render(containerId){
		const listContainers = document.createElement('div')
		for (let i = 0; i < 5; i++) {
		listContainers.className = 'list-containers'
		listContainers.append(this.getRandomArr())
		}
		const btn = document.createElement('button')
		btn.innerText = 'CLICK'
		btn.addEventListener('click',this.onButtonClick)
		btn.className = 'button'
		const targetContainer = document.getElementById(containerId)
		targetContainer.append(btn)
		targetContainer.append(listContainers)
	}
}

window.onload = function(){
	let l1 = new List
	l1.render('cnt')
	}





