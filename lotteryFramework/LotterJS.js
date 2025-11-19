// JavaScript Document

function swapImage(){
	if(document.getElementById("yeardropdown1").value ==2010) {
		document.getElementById("Lottery").src = "Screenshot 2025-10-26 220627.png";	
	}if(document.getElementById("yeardropdown1").value ==2011) {
		document.getElementById("Lottery").src = "22ee77f3fde008bed5ed1039338962c9.jpg";	
	}

}

	

document.getElementById("yeardropdown1").addEventListener("click", swapImage);
