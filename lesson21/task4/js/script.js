class Tables{
	constructor(rowNum, colNum){
		this.rowNum = rowNum
		this.colNum = colNum
	}

	createTable(){
		const table = document.createElement('table')
		table.className = 'table'
		for (let i = 0; i < this.rowNum; i++) {
			const row = document.createElement('tr')
			for (let j = 0; j < this.colNum; j++) {
				const column = document.createElement('td')
				column.className = 'column'
				column.innerText = Math.floor(Math.random()*(100-1))
				column.addEventListener('click', this.onClickChangeBorderColor )
				
				row.append(column)
			}
			table.append(row)
		}
		return table
	}

	onClickChangeBorderColor(event){
		if(event.target.tagName === 'TD'){
		const td = event.target
		const currentTable = td.closest('table')
		currentTable.style.border = '3px solid red'
		}
	}


	render(containerId){
		for (let i = 0; i < 3; i++) {
			const tableContainer = document.createElement('div')
			tableContainer.append(this.createTable())
			const targetContainer = document.getElementById(containerId)
			targetContainer.append(tableContainer)
		}
	}
}
window.onload = function(){
	const t1 = new Tables(3,3).render('container')
}