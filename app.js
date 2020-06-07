function showAlert(message,className){
 const div = document.createElement('div');
 div.className = `alert alert-${className}`;
 div.appendChild(document.createTextNode(message));
 const container = document.querySelector('.container');
 const form  = document.querySelector('#tip-form');
 container.insertBefore(div, form);
			//Vanish in 3 seconds
			setTimeout(()=>document.querySelector('.alert').remove(),3000);
}


document.getElementById('tip-form').addEventListener('submit',(e)=>{
	e.preventDefault();
	const billAmount = document.getElementById('amount').value;
	const serviceQuality = document.getElementById('serviceQuality').value;
	const numOfPeople = document.getElementById('people').value;

if(billAmount === '' || serviceQuality === '0' || numOfPeople ===''){
		//showAlert('Please fill in all the fields','danger');
		alert('test 1');
	}	
	else {
		alert (billAmount);
	}




});