var total;
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
function calculateTip(billAmount,serviceQuality,numOfPeople){
	   total = (billAmount * serviceQuality) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
}
function clearFields(){
	document.getElementById('amount').value = '';
	document.getElementById('serviceQuality').selectedIndex = 0;
	document.getElementById('people').value = '';
}
function showTip(){
	document.getElementById('output').style.display = 'block';
	document.getElementById('tip').innerHTML=`$ ${total} each`; 
}

document.getElementById('tip-form').addEventListener('submit',(e)=>{
	e.preventDefault();
	const billAmount = document.getElementById('amount').value;
	const serviceQuality = document.getElementById('serviceQuality').value;
	const numOfPeople = document.getElementById('people').value;

if(billAmount === '' || serviceQuality === '0' || numOfPeople ===''){
		showAlert('Please fill in all the fields!','danger');
		
	}	
	else {
		calculateTip(billAmount,serviceQuality,numOfPeople);
		showTip();
		clearFields();

	}




});