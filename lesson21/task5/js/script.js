form_containert.onclick=function(event){
	console.log(event.target.tagName);
	if(event.target.tagName === 'INPUT'){
		event.target.value = 0
	}
}